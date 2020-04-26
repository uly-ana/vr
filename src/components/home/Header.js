import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import {PrimaryBtn} from '../globals/Buttons'
const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner greeting="Welcome to " title="VR Club" text="some more info about this club">
                <PrimaryBtn>
                    View Details
                </PrimaryBtn>
            </Banner>
            
        </Hero>
    );
};

export default Header;