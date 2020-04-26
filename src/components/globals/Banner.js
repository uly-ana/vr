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

const fadeInLeft = (start, middle, end) => {
    const animation = keyframes`
0% {
    opacity: 0;
    transform: translateX(${start})
}
50%{
   opacity: 0;
   transform: translateX(${middle}) 
}
100%{
    opacity: 1;
    transform: translateX(${end})
}
`
return css`animation:${animation} 2.5s ease-in-out`;
};

const fadeInDown = (start, middle, end) => {
    const animation = keyframes`
0% {
    opacity: 0;
    transform: translateY(${start})
}
50%{
   opacity: 0;
   transform: translateY(${middle}) 
}
100%{
    opacity: 1;
    transform: translateY(${end})
}
`
    return css`animation:${animation} 3.5s ease-in-out`;
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
  ${fadeInLeft('100%', '-25%', '0%')};
}

.info{
   ${fadeInDown('-100%', '100%', '0%')}; 
}
`;
export default BannerWrapper