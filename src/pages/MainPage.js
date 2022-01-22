import React from 'react'

// core components
import MainNavbar from '../components/navbar/MainNavbar.js'
import MainHeader from '../components/header/MainHeader.js'
import MainFooter from '../components/footer/MainFooter.js'
import SelfIntroduction from '../components/sections/mainpage/Intro.js'
import Services from '../components/sections/mainpage/Services'
import Advantages from '../components/sections/mainpage/Advantages.js'
import Portfolio from '../components/sections/mainpage/Portfolio.js'
import Partners from '../components/sections/mainpage/Partners.js'
import Team from '../components/sections/mainpage/Team.js'
import Contact from '../components/sections/mainpage/Contact.js'

const MainPage = () => {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });


    return (
        <div>
            <MainNavbar />
            <MainHeader />
            <SelfIntroduction />
            <Services />
            <Advantages />
            <Portfolio />
            <Partners />
            <Team />
            <Contact />
            <div className="main">
                <MainFooter />
            </div>
        </div>
    );
};

export default MainPage;
