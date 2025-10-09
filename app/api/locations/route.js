import fs from "fs";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return Response.json(jsonData.locations || []);
}
