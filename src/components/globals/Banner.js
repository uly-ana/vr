import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import {setColor, setFont, setRem, setLetterSpacing, setBorder, media} from '../../styles'
 

const Banner = ({className, title, text, children, greeting}) => {
    return (
    <div className={className}>
        <h1>{greeting}<span></span>{title}{" "}
        </h1>
    <div className="info">
    <p>{text}</p>
    {children}</div>
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
text-align: center;
padding: ${setRem(35)} ${setRem(20)};
${setLetterSpacing(1)};
font-family: ${setFont.main};
color: ${setColor.mainBlue};
width: 70vw;

h1{
    font-size: ${setRem(30)};
    color: ${setColor.primaryColor};
    letter-spacing: ${setLetterSpacing(2)};
    font-family: ${setFont.second};
    
}
p {
    width: 90%;
    margin: 0 auto;
}

${media.tablet`
    width: 70vw; 
      
    p {
        width: 80%;
    }
    `};

${media.phone`
    width: 100%;
    ${setColor.primaryColor};
   
  p {
    width: 100%;
};
    `};

h1{
  ${fadeInLeft('100%', '-25%', '0%')};
}

.info{
   ${fadeInDown('-100%', '100%', '0%')}; 
   ${setFont.main};
   font-size:${setRem(18)};
}

.buttonPrm{
   ${fadeInDown('-100%', '50%', '0%')}; 
}
`;
export default BannerWrapper