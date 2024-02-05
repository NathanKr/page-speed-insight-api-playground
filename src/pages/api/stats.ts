import { IPsiSampleDb } from "@/types/i-psi-sample-db";
import IStatsApi from "@/types/i-stats-api";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { getAllInterestingLighthouseResultStatSummary } from "@/utils/common/psi-results-utils";
import { updateMapWithUrl } from "@/utils/common/psi-utils";
import { PSI_SAMPLES_COLLECTION } from "@/utils/server/constants";
import connectDB, { DB_NAME } from "@/utils/server/dal/db";
import { NextApiRequest, NextApiResponse } from "next";
import { URL_CONTAIN } from "../../../data/infos";
import IGetStats from "@/types/i-get-stats";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IStatsApi>
) {
  const client = await connectDB();
  const db = client.db(DB_NAME);
  const collection = db.collection(PSI_SAMPLES_COLLECTION);

  const info: IGetStats = req.query as unknown as IGetStats;
  const { urlContain } = info;
  const createdMin = Number(info.createdMin);
  const createdMax = Number(info.createdMax);


  const samples: IPsiSampleDb[] = (await collection
    .find({
      url: { $regex: `.*${urlContain}.*` },
      created: { $gte: createdMin, $lte: createdMax },
    })
    .toArray()) as unknown as IPsiSampleDb[];

  const map: PsiUrl2FromRootsMap = new Map();
  // --- .......... build map
  samples.forEach((sample) => {
    const { url, fromRoot } = sample;
    updateMapWithUrl(map, url, fromRoot);
  });

  const statsSummary = getAllInterestingLighthouseResultStatSummary(map);
  res.send({
    statsSummary,
    numSamples: samples.length,
  });
}
