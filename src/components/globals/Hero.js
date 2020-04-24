import styled from 'styled-components'
import homeImg from '../../images/homeBcg.jpeg'

const Hero = styled.header`
min-height: 100vh;
background: url(${props => props.img || homeImg}) no-repeat fixed center/cover;
display: flex;
align-items: center;
justify-content: center;
`;

export default Hero;