import { create } from "zustand";
import axios from "axios";

export const useTourStore = create((set) => ({
    tours: [],
    tour: null,

    getTours: async () => {
        const { data } = await axios.get(`/api/tours`);
        set({ tours: data });
        return data;
    },

    getByIdTour: async (id) => {
        const { data } = await axios.get(`/api/tours/${id}`);
        set({ tour: data });
        return data;
    },
    addTour: async (tour) => {
        const { data } = await axios.post(`/api/tours/`, tour);
        return data;
    },
    deleteTour: async (id) => {
        await axios.delete(`/api/tours/${id}`);
    },
    updateTour: async (id, updatedData) => {
        const { data } = await axios.patch(`/api/tours/${id}`, updatedData);
        return data;
    }
}));

export const useGetTours = () => useTourStore((state) => state.getTours);
export const useTours = () => useTourStore((state) => state.tours);
export const useGetByIdTour = () => useTourStore((state) => state.getByIdTour);
export const useTour = () => useTourStore((state) => state.tour);
export const useAddTour = () => useTourStore((state) => state.addTour);
export const useDeleteTour = () => useTourStore((state) => state.deleteTour);
export const useUpdateTour = () => useTourStore((state) => state.updateTour);
