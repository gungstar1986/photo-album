import {albumAPI} from "../Api/albumAPI";

const SET_SERVER_DATA = "SET_SERVER_DATA";
const SET_BIG_IMAGE_DATA = "SET_BIG_IMAGE_DATA";
const CLEAR_MODAL_WINDOW = "CLEAR_MODAL_WINDOW";
const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
    images: null,
    bigImageData: null,
};

const albumReducer = (state = initialState, action) => {
    if (action.type === SET_SERVER_DATA) {
        return {
            ...state,
            images: action.data
        }
    }
    if (action.type === SET_BIG_IMAGE_DATA) {
        return {
            ...state,
            bigImageData: action.data
        }
    }
    if (action.type === CLEAR_MODAL_WINDOW) {
        return {
            ...state,
            bigImageData: null
        }
    }
    if (action.type === ADD_COMMENT) {
        return {
            ...state,
            bigImageData: {...state.bigImageData, comments: [...state.bigImageData.comments, action.data]}
        }
    }
    return state
};


const addComment = (data) => ({type: ADD_COMMENT, data});
const setBigImageData = (data) => ({type: "SET_BIG_IMAGE_DATA", data});
const serverData = (data) => ({type: "SET_SERVER_DATA", data});
export const clearModalWindow = () => ({type: "CLEAR_MODAL_WINDOW"});
export const getBigImage = id => dispatch => albumAPI.getBigImage(id).then(resp => dispatch(setBigImageData(resp.data)));
export const getImagesFromServer = () => dispatch => albumAPI.getPhotos().then(resp => dispatch(serverData(resp.data)));
export const sendForm = (id, name, comment) => dispatch => {
    albumAPI.sendComment(id, name, comment).then(resp =>
        resp.status === 204
        && dispatch(addComment({id: id++, text: comment, date: new Date().getTime()})))
};

export default albumReducer
