import {css} from 'styled-components'

export const setColor = {
    primaryColor: "#03DDDC",
    mainWhite: "fff",
    mainBlack: "#222",
    mainBlue: "#037A90"
}

export const setFont = {
    main: "font-family: 'Special Elite', cursive",
    second: "font - family: 'Changa', sans- serif"
};

export const setFlex = ({x="center",y="center"}={}) => {
    return `
    display: flex;
    align-items:${y};
    justify-content:${x};
    `;
};

export const setBackground = ({
    img = "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
color = "rgba(0,0,0,0)"
} = {}) => {
    return `background:linear-gradient(${color}, ${color}),
url(${img}) no-repeat fixed center/cover`;
};

export const setRem = (number = 16) => {
    return `
    ${number/16}rem
    `
};

export const setLetterSpacing = (number = 2) => {
    return `letter-spacing:${number}px`
};

export const setBorder = ({width="2px", style="solid", color="red"} = {}) => {
    return `
    border-top: ${width} ${style} ${setColor.mainBlue};
    border-right: ${width} ${style} ${setColor.mainBlue}
    `
};

const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) =>{
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }
    `
    return acc
}, {});

export const setTransition = ({ property = "all", time ="1s", timing="ease-in-out"}={})=> {
return `
transition: ${property} ${time} ${timing}
`
};