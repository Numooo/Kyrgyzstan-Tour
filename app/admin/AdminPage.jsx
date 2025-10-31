"use client"
import React, {useEffect} from 'react';
import AddSVG from "@/utils/AddSVG";
import DeleteSVG from "@/utils/DeleteSVG";
import {useGetRoutes, useRoutes} from "@/stores/routeStore";

export default function AdminPage() {
    const routesList = useRoutes();
    const getRoutes = useGetRoutes();
    useEffect(() => {
        void getRoutes();
    }, []);

    return (
        <div className="flex flex-1 h-full container text-white">
            <aside className="w-full md:w-2/3 bg-black border-r border-gray-700">
                <div className="p-4">
                    <h2 className="bg-sky-900 px-4 py-2 font-semibold">APP</h2>
                    <ul className="bg-gray-900">
                        {routesList?.map((route, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center px-4 py-2 hover:bg-gray-800">
                                <a href={`/admin/${route}`} className="hover:underline">
                                    {route}
                                </a>
                                <span className="space-x-3 text-green-400 text-sm">
                                    <a href={`/admin/${route}/create`} className="hover:underline">
                                        <AddSVG/> Добавить
                                    </a>
                                    <a href={`/admin/${route}`} className="text-yellow-400 hover:underline">
                                        ✎ Изменить
                                    </a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <main className="hidden md:inline flex-1 bg-black p-4">
                <div className="bg-gray-900 p-4">
                    <h2 className="text-lg font-semibold mb-4">Последние действия</h2>
                    <h3 className="text-sm text-gray-400 mb-2">Мои действия</h3>
                    <ul className="space-y-2 text-sm">
                        <li><span className="text-green-400"><AddSVG/> Admin</span> <span
                            className="text-gray-300">Видео отзыв</span>
                        </li>
                        <li><span className="text-red-500"><DeleteSVG/> Realty object (d9f1d3c2...)</span> <span
                            className="text-gray-300">Realty</span></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}