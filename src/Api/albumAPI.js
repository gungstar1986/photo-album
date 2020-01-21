import axios from "axios";

const instance = axios.create({
    baseURL: "https://boiling-refuge-66454.herokuapp.com/images/"
});


export const albumAPI =  {
    getPhotos:() => instance.get(),
    getBigImage: (id) => instance.get(`${id}`),
    sendComment: (id, name, comment) => instance.post(`${id}/comments`, {name, comment})
};
