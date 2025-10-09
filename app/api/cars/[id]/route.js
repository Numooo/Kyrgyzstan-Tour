import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
    const { id } = params;

    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const car = jsonData.cars.find(
        (car) => String(car.id) === String(id)
    );

    if (!car) {
        return new Response(JSON.stringify({ error: "Car not found" }), {
            status: 404,
        });
    }

    return Response.json(car);
}
