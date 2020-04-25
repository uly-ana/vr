
export const setColor = {
    primaryColor: "#03DDDC",
    mainWhite: "fff",
    mainBlack: "#222",
    mainBlue: "#037A90"
}

export const setFont = {
    // main: "font-family: 'Special Elite', cursive;",
    // second: "font - family: 'Changa', sans- serif;"
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