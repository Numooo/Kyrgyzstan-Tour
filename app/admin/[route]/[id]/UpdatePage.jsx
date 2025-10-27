"use client";

import React, {useEffect, useState} from "react";
import AddSVG from "@/utils/AddSVG";
import {useParams, usePathname} from "next/navigation";
import {
    useGetRoutes,
    useRoutes,
    useUploadedImage,
    useUploadError,
    useUploadImage
} from "@/stores/routeStore";
import {useDeleteSocial, useGetByIdSocial, useSocial, useUpdateSocial} from "@/stores/socialStore";
import {useCar, useDeleteCar, useGetByIdCar, useUpdateCar} from "@/stores/carStore";
import {useRouter} from "next/navigation";
import {useGetByIdLocation, useLocation} from "@/stores/locationStore";

export default function UpdatePage() {
    const uploadImage = useUploadImage();
    const uploadedImage = useUploadedImage();
    const uploadingError = useUploadError();
    const getRoutes = useGetRoutes();
    const routesList = useRoutes();

    const social = useSocial();
    const getByIdSocial = useGetByIdSocial();
    const deleteSocial = useDeleteSocial();
    const updateSocial = useUpdateSocial();

    const car = useCar();
    const getByIdCar = useGetByIdCar();
    const deleteCar = useDeleteCar();
    const updateCar = useUpdateCar();

    const location = useLocation();
    const getByIdLocation = useGetByIdLocation();

    const params = useParams();
    const router = useRouter();
    const {id} = useParams();
    const pathname = usePathname();

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
        if (isSocialPage) void getByIdSocial(id);
        if (isCarPage) void getByIdCar(id);
        if (isLocationPage) void getByIdLocation(id);
    }, [id, isSocialPage, isCarPage, isLocationPage]);

    let data = null;
    let name = "";

    if (isSocialPage) {
        data = social;
        name = "социальную сеть";
    } else if (isTourPage) {
        data = tour;
        name = "тур";
    } else if (isLocationPage) {
        data = location;
        name = "локацию";
    } else if (isCarPage) {
        data = car;
        name = "машину";
    }

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [engine, setEngine] = useState("");
    const [places, setPlaces] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [file, setFile] = useState(null);
    const [isEditingImage, setIsEditingImage] = useState(false);

    useEffect(() => {
        if (data) {
            setTitle(data.title || "");
            setUrl(data.url || "");
            setEngine(data.engine || "");
            setPlaces(data.places || "");
            setYear(data.year || "");
            setType(data.type || "");
        }
    }, [data]);

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
        }
    };
    const handleDelete = async () => {
        try {
            if (isCarPage){
                await deleteCar(id);
                router.push("/admin/cars");
            } else if (isSocialPage){
                await deleteSocial(id);
                router.push("/admin/socials");
            }
        } catch (error) {
            console.error("Ошибка при удалении:", error);
        }
    };
    const handleUpdate = async () => {
        let imagePath = "/assets/photo_2025-07-02_23-13-58.jpg";

        if (file) {
            const uploadedPath = await uploadImage(file);
            if (uploadedPath) imagePath = uploadedPath;
        }

        const updatedCar = { title, engine, places, year, type, image: imagePath };

        try {
            if (isCarPage) {
                await updateCar(id, updatedCar);
                router.push("/admin/cars");
            } else if (isSocialPage){
                await updateSocial(id, {title, url});
                router.push("/admin/socials");
            }
        } catch (err) {
            console.error("❌ Error updating car:", err);
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
                    <h2 className="text-xl font-medium mb-6">
                        Изменить {name}
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
                {isSocialPage && (
                    <div className="mb-4">
                        <div className="flex gap-10">
                            <label className="block mb-2 w-1/12">Ссылка:</label>
                            <div className="mt-1">
                                <p className={'text-sm'}>
                                    Сейчас:{" "}
                                    <a href={data?.url} className="text-blue-400 hover:underline">
                                        {data?.url}
                                    </a>
                                </p>
                                <div className="flex items-center">
                                    <label className="text-sm">Изменить:</label>
                                    <input
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        className="min-w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 mt-1 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    Введите в виде URL (https://…)
                                </p>
                            </div>
                        </div>
                    </div>
                )}
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
                                {data?.image && !isEditingImage ? (
                                    <div className="flex items-start flex-col gap-4">
                                        <img
                                            src={data?.image}
                                            alt={data?.name}
                                            className="w-64 h-40 object-cover bg-gray-800 border border-gray-600 rounded-md"
                                        />
                                        <button
                                            onClick={() => setIsEditingImage(true)}
                                            className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded-md transition"
                                        >
                                            Изменить
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="w-64 bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-400"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setIsEditingImage(false)}
                                                className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition"
                                            >
                                                Отмена
                                            </button>
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
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <div className="flex flex-wrap gap-3 mt-6">
                    <button onClick={handleUpdate}
                            className="px-6 py-2 rounded-md bg-sky-800 hover:bg-sky-700 transition">
                        СОХРАНИТЬ
                    </button>
                    <button onClick={handleDelete}
                            className="px-6 py-2 rounded-md bg-red-600 hover:bg-red-500 transition ml-auto">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
}
