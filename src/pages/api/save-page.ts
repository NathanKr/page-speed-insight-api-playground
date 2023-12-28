import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import { LOGS_DIR } from "@/utils/server/constants";
import ISavePageRequestBody from "@/types/i-save-page-request-body";
import ISavePageResponseData from "@/types/i-save-page-response-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { htmlContent } = req.body as ISavePageRequestBody;

    // Save the HTML content to a file
    const filePath = path.join(
      process.cwd(),
      LOGS_DIR,
      `psi_results_${Date.now()}.html`
    );

    const resData: ISavePageResponseData = { filePath };
    await fs.writeFile(filePath, htmlContent);

    res.status(201).json({ ...resData });
  } else {
    res.status(405).json({ error: `Method : ${req.method} Not Allowed` });
  }
}
