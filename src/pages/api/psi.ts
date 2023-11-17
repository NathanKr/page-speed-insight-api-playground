// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import IGetPsiInfo from "@/types/i-get-psi-info";
import { Root } from "@/types/types";
import { getPsiAPIUrl } from "@/utils/server/utils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ root: Root }>
) {
  const { query } = req;
  const info = (query as unknown as IGetPsiInfo);
  
  const url = getPsiAPIUrl(info);
  const root = (await axios.get(url)).data;

  res.status(200).json({ root });
}
