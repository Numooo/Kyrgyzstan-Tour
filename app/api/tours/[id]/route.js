import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
    const { id } = params;

    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const tour = jsonData.tours.find(
        (tour) => String(tour.id) === String(id)
    );

    if (!tour) {
        return new Response(JSON.stringify({ error: "Tour not found" }), {
            status: 404,
        });
    }

    return Response.json(tour);
}
