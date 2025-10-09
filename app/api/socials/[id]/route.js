import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
    const { id } = params;

    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const social = jsonData.socials.find(
        (soc) => String(soc.id) === String(id)
    );

    if (!social) {
        return new Response(JSON.stringify({ error: "Social not found" }), {
            status: 404,
        });
    }

    return Response.json(social);
}
