import { IPsiSampleDb } from "@/types/i-psi-sample-db";
import IResultSummary from "@/types/i-result-summary";
import IStatsApi from "@/types/i-stats-api";
import { PsiUrl2FromRootsMap } from "@/types/types";
import { getAllInterestingLighthouseResultStatSummary } from "@/utils/common/psi-results-utils";
import { updateMapWithUrl } from "@/utils/common/psi-utils";
import { PSI_SAMPLES_COLLECTION } from "@/utils/server/constants";
import connectDB, { DB_NAME } from "@/utils/server/dal/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IStatsApi>
) {
  const client = await connectDB();
  const db = client.db(DB_NAME);
  const collection = db.collection(PSI_SAMPLES_COLLECTION);

  const samples: IPsiSampleDb[] = (await collection
    .find({})
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
    numSamples: samples.length
  });
}
