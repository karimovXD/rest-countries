import { axiosInstance } from "./axiosInstance"

export const PostService = {
    getAllFlags: async function () {
        const response = await axiosInstance.get('/all');
        return response.data;
    },
    searchCountry: async function (title) {
        const response = await axiosInstance.get(`/name/${title}`);
        return response.data;
    },
    selectRegion: async function (title) {
        const response = await axiosInstance.get(`/region/${title}`);
        return response.data;
    }
};