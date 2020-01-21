import React from 'react';
import classes from './App.module.css';
import Header from "./Header/Header";
import ContentContainer from "./Content/ContentContainer";
import ModalContainer from "./Modal/ModalContainer";
import Footer from "./Footer/Footer";


const App = () => {
    return (
        <div className={classes.app}>
            <Header/>
            <ContentContainer/>
            <ModalContainer/>
            <Footer/>
        </div>
    );
};


export default App;
