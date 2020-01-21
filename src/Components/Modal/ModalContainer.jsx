import React from "react";

import Modal from "./Modal";
import {connect} from "react-redux";
import {clearModalWindow, sendForm} from "../../Redux/album-reducer";


const ModalContainer = (props) =>
    props.modal && <Modal clear={props.clearModalWindow} modal={props.modal} send={props.sendForm}/>;



const mapStateToProps = state => ({
    modal: state.album.bigImageData
});
const mapDispatchToProps = {
    clearModalWindow,
    sendForm
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
