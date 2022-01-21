import React from 'react'

// core components
import MainNavbar from '../components/navbar/MainNavbar.js'
import MainHeader from '../components/header/MainHeader.js'
import MainFooter from '../components/footer/MainFooter.js'

const MainPage = () => {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });


    return (
        <>
            <MainNavbar />
            <MainHeader />
            <div className="main">
                <MainFooter />
            </div>
        </>
    );
};

export default MainPage;
