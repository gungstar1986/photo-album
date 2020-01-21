import React, {Component} from "react";
import {connect} from "react-redux";
import {getBigImage, getImagesFromServer} from "../../Redux/album-reducer";
import Content from "./Content";
import Preloader from "../Preloader/Preloader";


class ContentContainer extends Component {
    componentDidMount() {
        this.props.getImagesFromServer()
    }

    render() {
        return this.props.images ? <Content {...this.props}/> : <Preloader/>
    }
}

const mapStateToProps = state => ({
    images: state.album.images,

});
const mapDispatchToProps = {
    getImagesFromServer,
    getBigImage
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
