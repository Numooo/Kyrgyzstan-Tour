"use client";

import React, {useEffect, useState} from "react";
import AddSVG from "@/utils/AddSVG";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useGetRoutes, useRoutes, useUploadError, useUploading} from "@/stores/routeStore";
import { useUploadImage, useUploadedImage } from "@/stores/routeStore";
import {useAddCar} from "@/stores/carStore";
import {useAddSocial} from "@/stores/socialStore";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [engine, setEngine] = useState("");
    const [places, setPlaces] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [file, setFile] = useState(null);
    const uploadImage = useUploadImage();
    const uploadedImage = useUploadedImage();
    const uploadingError = useUploadError();
    const getRoutes = useGetRoutes();
    const routesList = useRoutes();
    const addCar = useAddCar();
    const addSocial = useAddSocial();

    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const isSocialPage =
        params?.slug === "social" || pathname?.includes("/admin/social");
    const isTourPage =
        params?.slug === "tour" || pathname?.includes("/admin/tour");
    const isLocationPage =
        params?.slug === "location" || pathname?.includes("/admin/location");
    const isCarPage =
        params?.slug === "cars" || pathname?.includes("/admin/cars");

    useEffect(() => {
        void getRoutes();
    }, [getRoutes]);
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        let imagePath = "/assets/photo_2025-07-02_23-13-58.jpg";

        if (file) {
            const uploadedPath = await uploadImage(file);
            if (uploadedPath) {
                imagePath = uploadedPath;
            }
        }

        if (isCarPage) {
            await addCar({
                id: Date.now(),
                title,
                engine,
                places,
                year,
                type,
                image: imagePath,
            });
            router.push("/admin/cars");
        }

        if (isSocialPage) {
            await addSocial({
                id: Date.now(),
                title,
                url
            });
            router.push("/admin/socials");
        }
    };


    return (
        <div className="container flex h-full bg-[#111] text-white">
            <aside className="w-1/5 bg-gray-900 border-r border-gray-700 overflow-y-auto">
                <div className="p-3 text-gray-300 bg-sky-900 text-sm">APP</div>
                <ul className="space-y-1 text-sm">
                    {routesList.map((item, index) => (
                        <li key={index} className="flex justify-between items-center px-4 py-2 hover:bg-gray-800">
                            <a className={'hover:underline'} href={`/admin/${item}`}>{item}</a>
                            <a href={`/admin/${item}/create`}
                               className="text-green-400 hover:underline"><AddSVG/> Добавить</a>
                        </li>
                    ))}
                </ul>
            </aside>
            <div className="mx-auto bg-black rounded-lg w-4/5 p-6">
                <div className={'flex justify-between items-start'}>
                    <h2 className="text-xl font-medium mb-4">
                        Добавить Социальная сеть
                    </h2>
                </div>
                <div className="mb-4">
                    <div className="flex gap-10 items-center">
                        <label className="block mb-1 w-1/12">Название:</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>
                </div>
                {isCarPage && (
                    <>
                        <div className="mb-4">
                            <div className="flex gap-10 items-center">
                                <label className="block mb-1 w-1/12">Двигатель:</label>
                                <input
                                    value={engine}
                                    placeholder={"4.7 L"}
                                    onChange={(e) => setEngine(e.target.value)}
                                    className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex gap-10 items-center">
                                <label className="block mb-1 w-1/12">Мест:</label>
                                <input
                                    value={places}
                                    placeholder={"7 seats"}
                                    onChange={(e) => setPlaces(e.target.value)}
                                    className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex gap-10 items-center">
                                <label className="block mb-1 w-1/12">Год:</label>
                                <input
                                    value={year}
                                    type={"number"}
                                    placeholder={"2021"}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex gap-10 items-center">
                                <label className="block mb-1 w-1/12">Привод:</label>
                                <input
                                    value={type}
                                    placeholder={"4WD"}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex gap-10 items-center">
                                <label className="block mb-1 w-1/12">Фото:</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                            {file && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-300">Выбран файл: {file.name}</p>
                                </div>
                            )}
                            {uploadedImage && (
                                <p className="mt-2 text-sm text-green-400">Файл загружен: {uploadedImage}</p>
                            )}
                            {uploadingError && (
                                <p className="mt-2 text-sm text-red-500">{uploadingError}</p>
                            )}
                        </div>

                    </>
                )}
                {isSocialPage && (
                    <div className="mb-4">
                        <div className="flex gap-10">
                            <label className="block mb-1 w-1/12">Ссылка:</label>
                            <div>
                                <input
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-72 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-3 mt-6">
                    <button onClick={handleUpload} className="px-6 py-2 rounded-md bg-sky-800 hover:bg-sky-700 transition cursor-pointer">
                        СОХРАНИТЬ
                    </button>
                    <button onClick={() => router.back()}
                        className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition ml-auto cursor-pointer">
                        ОТМЕНА
                    </button>
                </div>
            </div>
        </div>
    )
        ;
}
