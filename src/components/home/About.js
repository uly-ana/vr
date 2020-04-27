import React from 'react'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpg'
import {setRem, setBorder, setColor, setLetterSpacing, media} from '../../styles'
import {PrimaryBtn} from '../globals/Buttons'
import styled from 'styled-components'

const About = () => {
    return (
        <>
        <Section>
                <AboutCenter>
                    <div className="about-img">
                        <img src={aboutImg} alt="about us"/>
                    </div>
                    <div className="about-info">
                    <Title title="about us"></Title> 
                        <p>
                            Absolute freedom.
The player can easily move around 10 m2. All players movements are tracked and transferred to the virtual world</p><br></br>
                        <p>Online game.
Play against each other or together against everyone! (from 1 to 4 people at the same time)</p>
<br></br>
                        <p>Closed club. 
You can enter the club only with a password (you can find it out using our chat bot for Viber and Telegram)</p>
<br></br>
                        <p>What can I play?</p>
                        <br></br>

                    <PrimaryBtn>See Games</PrimaryBtn>

                    </div>
                </AboutCenter>
        
        </Section> 
        </>
    )
};

const AboutCenter = styled.div`
.about-img, 
.about-info {
    padding: ${setRem(30)};
}
.about-img {
    img{
    width: 100%;
    display: block;
    ${setBorder({width: setRem(4)})}
    }
}
.about-info{
    p{
        color: ${setColor.mainBlue};
        ${setLetterSpacing(1)};
    }
};

width: 90vw;
margin: 0 auto;

${media.desktop `
    width: 100vw;
    max-width: 1170px;
    display: grid;
    .about-img,
.about-info {
    padding: ${setRem(0)};
};
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(20)};
    .about-img, .about-info{
        align-self: center;
    }

.about-info{
    p{
        width: 80%;
    }
}
`}


`

export default About
