import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import { LOGS_DIR } from "@/utils/server/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { htmlContent } = req.body;

    // Save the HTML content to a file
    const filePath = path.join(
      process.cwd(),
      LOGS_DIR,
      `psi_results_${Date.now()}.html`
    );
    await fs.writeFile(filePath, htmlContent);

    res
      .status(201)
      .json({ message: `Page saved successfully into : ${filePath}!` });
  } else {
    res.status(405).json({ error: `Method : ${req.method} Not Allowed` });
  }
}
