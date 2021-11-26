import React from "react"
import "../assets/css/app.css";
import TopBar from './TopBar';
import RowTop from './ContentWrapper';
import Footer from './Footer';


function ContentWrapper() {

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

                <TopBar />

                <RowTop />

            </div>
            <Footer />
        </div>
    )

}

export default ContentWrapper;