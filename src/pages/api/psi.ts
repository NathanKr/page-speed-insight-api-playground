// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Root } from "@/types/types";
import { getPsiAPIUrl } from "@/utils/server/utils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ root: Root }>
) {
  const url = getPsiAPIUrl("https://developers.google.com");
  const root = (await axios.get(url)).data;

  console.log(root);
  

  res.status(200).json({ root });
}
