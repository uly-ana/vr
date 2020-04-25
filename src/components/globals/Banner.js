import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import {setColor, setFont, setRem, setLetterSpacing, setBorder, media} from '../../styles'
 

const Banner = ({className, title, text, children, greeting}) => {
    return (
        <div className={className}>
            <h1>{greeting}<span>{title}</span>{" "}
            </h1>
    <div className="info">
    <p>{text}</p>
    {children}
    </div>
   

        </div>
    );
};
const BannerWrapper = styled(Banner)`
/* background: rgba(0,0,0, 0.7); */
text-align: center;
padding: ${setRem(35)} ${setRem(20)};
letter-spacing: ${setLetterSpacing(9)};
font-family: ${setFont.main};
color: ${setColor.mainBlue};
${setBorder};

h1{
    /* text-transform: capitalize; */
    font-size: ${setRem(38)};
    color: ${setColor.primaryColor};
    span {
        color: ${setColor.mainWhite}
    }
}
p {
    width: 85%;
    margin: 0 auto;
}
${media.tablet`
    width: 70vw;
    ${setBorder};
    ${setColor.primaryColor};

    p{
        width: 75%;
    }`}

h1{
    /* animation */
}

.info{
    /* animation */
}
`;
export default BannerWrapper