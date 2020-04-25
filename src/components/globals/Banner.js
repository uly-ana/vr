import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import {setColor, setFont} from '../../styles'
 

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
padding: 30px 22px;
letter-spacing: 3px;
font-family: ${setFont.main},
color: ${setColor.mainBlue};

h1{
    /* text-transform: capitalize; */
    font-size: 38px;
    color: ${setColor.primaryColor};
    span {
        color: ${setColor.mainWhite}
    }
}
p {
    width: 85%;
    margin: 0 auto;
}
@media (min-width: 68px){
    width: 70vw;
    border-top: 1px solid;
    border-right: 1px solid;
     ${setColor.primaryColor};
    p{
        width: 75%;
    }
}

h1{
    /* animation */
}

.info{
    /* animation */
}
`;
export default BannerWrapper