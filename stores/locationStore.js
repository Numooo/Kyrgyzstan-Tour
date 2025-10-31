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
    addLocation: async (location) => {
        const { data } = await axios.post(`/api/locations/`, location);
        return data;
    },
    deleteLocation: async (id) => {
        await axios.delete(`/api/locations/${id}`);
    },
    updateLocation: async (id, updatedData) => {
        const { data } = await axios.patch(`/api/locations/${id}`, updatedData);
        return data;
    }
}));

export const useGetLocations = () => useLocationStore((state) => state.getLocations);
export const useLocations = () => useLocationStore((state) => state.locations);
export const useGetByIdLocation = () => useLocationStore((state) => state.getByIdLocation);
export const useLocation = () => useLocationStore((state) => state.location);
export const useAddLocation = () => useLocationStore((state) => state.addLocation);
export const useDeleteLocation = () => useLocationStore((state) => state.deleteLocation);
export const useUpdateLocation = () => useLocationStore((state) => state.updateLocation);
