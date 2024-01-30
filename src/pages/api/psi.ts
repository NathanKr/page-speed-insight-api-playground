// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/google-api-psi-types";
import { getPsiAPIUrl } from "@/utils/server/utils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB, { DB_NAME } from "@/utils/server/dal/db";
import { PSI_SAMPLES_COLLECTION } from "@/utils/server/constants";
import { PSI_API_SAMPLE_SAVE_TO_MONGODB } from "../../../data/infos";
import { IPsiSampleDb } from "@/types/i-psi-sample-db";
import { convert } from "@/utils/common/psi-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ root: Root }>
) {
  const { query } = req;
  const info = query as unknown as IGetPsiInfo;

  const url = getPsiAPIUrl(info);
  const root: Root = (await axios.get(url)).data;

  if (PSI_API_SAMPLE_SAVE_TO_MONGODB) {
    const client = await connectDB();
    const db = client.db(DB_NAME);
    const collection = db.collection(PSI_SAMPLES_COLLECTION);

    const entry: IPsiSampleDb = {
      fromRoot: convert(root),
      url: root.lighthouseResult.requestedUrl,
      created: new Date().getTime(),
    };
    await collection.insertOne(entry);
  }

  res.status(200).json({ root });
}
