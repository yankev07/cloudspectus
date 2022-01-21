import React from 'react'

// reactstrap components
import { Container } from "reactstrap"

const MainHeader = () => {

    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                backgroundImage:
                    "url(" + require("../../assets/img/main-background.jpg").default + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                <Container>
                    <div className="title-brand">
                    <h1 className="presentation-title">Cloud Spectus</h1>
                    <div className="fog-low">
                        <img
                        alt="..."
                        src={require("../../assets/img/fog-low.png").default}
                        />
                    </div>
                    <div className="fog-low right">
                        <img
                        alt="..."
                        src={require("../../assets/img/fog-low.png").default}
                        />
                    </div>
                    </div>
                    <h2 className="presentation-subtitle text-center">
                        Your digital transformation partner
                    </h2>
                </Container>
                </div>
                <div
                className="moving-clouds"
                style={{
                    backgroundImage:
                    "url(" + require("../../assets/img/clouds.png").default + ")",
                }}
                />
            </div>
        </>  
    );
};

export default MainHeader;
