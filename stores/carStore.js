import { create } from "zustand";
import axios from "axios";

export const useCarStore = create((set) => ({
    cars: [],
    car: null,

    getCars: async () => {
        const { data } = await axios.get(`/api/cars`);
        set({ cars: data });
        return data;
    },

    getByIdCar: async (id) => {
        const { data } = await axios.get(`/api/cars/${id}`);
        set({ car: data });
        return data;
    },
}));

export const useGetCars = () => useCarStore((state) => state.getCars);
export const useCars = () => useCarStore((state) => state.cars);
export const useGetByIdCar = () => useCarStore((state) => state.getByIdCar);
export const useCar = () => useCarStore((state) => state.car);
