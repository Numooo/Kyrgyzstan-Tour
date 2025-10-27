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
    addCar: async (car) => {
        const { data } = await axios.post(`/api/cars/`, car);
        return data;
    },
    deleteCar: async (id) => {
        await axios.delete(`/api/cars/${id}`);
    },
    updateCar: async (id, updatedData) => {
        const { data } = await axios.patch(`/api/cars/${id}`, updatedData);
        return data;
    }
}));

export const useGetCars = () => useCarStore((state) => state.getCars);
export const useCars = () => useCarStore((state) => state.cars);
export const useAddCar = () => useCarStore((state) => state.addCar);
export const useDeleteCar = () => useCarStore((state) => state.deleteCar);
export const useGetByIdCar = () => useCarStore((state) => state.getByIdCar);
export const useCar = () => useCarStore((state) => state.car);
export const useUpdateCar = () => useCarStore((state) => state.updateCar);
