import { create } from "zustand";
import axios from "axios";

export const useSocialStore = create((set) => ({
    socials: [],
    social: null,

    getSocials: async () => {
        const { data } = await axios.get(`/api/socials`);
        set({ socials: data });
        return data;
    },

    getByIdSocial: async (id) => {
        const { data } = await axios.get(`/api/socials/${id}`);
        set({ social: data });
        return data;
    },
    addSocial: async (social) => {
        const { data } = await axios.post(`/api/socials/`, social);
        return data;
    },
    deleteSocial: async (id) => {
        await axios.delete(`/api/socials/${id}`);
    },
    updateSocial: async (id, updatedData) => {
        const { data } = await axios.patch(`/api/socials/${id}`, updatedData);
        return data;
    }
}));

export const useGetSocials = () => useSocialStore((state) => state.getSocials);
export const useSocials = () => useSocialStore((state) => state.socials);
export const useGetByIdSocial = () => useSocialStore((state) => state.getByIdSocial);
export const useSocial = () => useSocialStore((state) => state.social);
export const useAddSocial = () => useSocialStore((state) => state.addSocial);
export const useDeleteSocial = () => useSocialStore((state) => state.deleteSocial);
export const useUpdateSocial = () => useSocialStore((state) => state.updateSocial);
