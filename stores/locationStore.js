import { create } from "zustand";
import axios from "axios";

export const useLocationStore = create((set) => ({
    locations: [],
    location: null,

    getLocations: async () => {
        const { data } = await axios.get(`/api/locations`);
        set({ locations: data });
        return data;
    },

    getByIdLocation: async (id) => {
        const { data } = await axios.get(`/api/locations/${id}`);
        set({ location: data });
        return data;
    },
}));

export const useGetLocations = () => useLocationStore((state) => state.getLocations);
export const useLocations = () => useLocationStore((state) => state.locations);
export const useGetByIdLocation = () => useLocationStore((state) => state.getByIdLocation);
export const useLocation = () => useLocationStore((state) => state.location);
