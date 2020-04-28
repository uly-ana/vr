import {css} from 'styled-components'

export const setColor = {
    primaryColor: "#03DDDC",
    mainWhite: "#fff",
    mainBlack: "#000",
    mainBlue: "#037A90"
};

export const setFont = {
    main: "font-family: 'Share Tech Mono', monospace",
    second: "font-family: 'Titillium Web', sans-serif"
};

export const setFlex = ({x="center",y="center"}={}) => {
    return `
    display: flex;
    align-items:${y};
    justify-content:${x};
    `
};

export const setBackground = ({
    img = "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
color = "rgba(0,0,0,0)"
} = {}) => {
    return `background:linear-gradient(${color}, ${color}),
url(${img}) no-repeat fixed center/cover`
};

export const setRem = (number = 16) => {
    return `
    ${number/16}rem
    `
};

export const setLetterSpacing = (number = 2) => {
    return `letter-spacing:${number}px`
};

export const setBorder = ({ width = "2px", style = "solid", color ="red"} = {}) => {
    return `
    border: ${width} ${style} ${setColor.mainBlue};
    `
};

export const setShadow = {
    buttonShd: "0 0 10px 0 #037A90 inset, 0 0 10px 4px #037A90",
    cardShd: "1px 0px 60px -9px rgba(3, 221, 220, 1)",
    cardShdDarker: "1px 0px 60px 23px rgba(3, 221, 220, 1)"
};

const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 375,
    smallPhone: 320
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