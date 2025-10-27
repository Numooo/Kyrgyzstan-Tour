import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
        return NextResponse.json({ error: "Файл не найден" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "uploads");
    const filePath = path.join(uploadDir, file.name);

    await writeFile(filePath, buffer);

    const publicPath = `/uploads/${file.name}`;
    return NextResponse.json({ path: publicPath });
}
