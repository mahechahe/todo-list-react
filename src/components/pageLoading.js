import React from "react";
import '../styles/pageLoading.css'

function PageLoading(props){
    return(
        <>
        {props.loading && <div className="container">
            <div className="background">
                <div className="left">
                    <div className="image"></div>
                    <div className="mask thick"></div>
                </div>
                <div className="right">
                    <div className="bar"></div>
                    <div className="mask thick"></div>
                    <div className="bar"></div>
                    <div className="mask thin"></div>
                    <div className="bar medium"></div>
                    <div className="mask thick"></div>
                    <div className="bar small"></div>
                </div>
            </div>
        </div>}
        </>
    )
}

export {PageLoading};