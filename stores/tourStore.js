import { create } from "zustand";
import axios from "axios";
import { api } from "./api";

export const useTourStore = create((set) => ({
    tours: [],
    tour: null,

    getTours: async () => {
        const { data } = await axios.get(`${api}/tours`);
        set({ tours: data });
        return data;
    },

    getByIdTour: async (id) => {
        const { data } = await axios.get(`${api}/tours/${id}`);
        set({ tour: data });
        return data;
    },
}));

export const useGetTours = () => useTourStore((state) => state.getTours);
export const useTours = () => useTourStore((state) => state.tours);
export const useGetByIdTour = () => useTourStore((state) => state.getByIdTour);
export const useTour = () => useTourStore((state) => state.tour);
