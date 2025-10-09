import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
    const { id } = params;

    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const location = jsonData.locations.find(
        (loc) => String(loc.id) === String(id)
    );

    if (!location) {
        return new Response(JSON.stringify({ error: "Location not found" }), {
            status: 404,
        });
    }

    return Response.json(location);
}
