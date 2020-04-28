import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import {PrimaryBtn} from '../globals/Buttons'
const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner 
                greeting="Welcome to " title="VR Club" text="A new type of entertainment for you, your friends, loved ones and relatives.">
                <PrimaryBtn className="buttonPrm" t="2.5rem">
                    View Details
                </PrimaryBtn>
            </Banner>  
        </Hero>
    );
};

export default Header;