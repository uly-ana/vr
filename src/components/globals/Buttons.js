import styled from 'styled-components'
import { setColor, setRem, setLetterSpacing, setTransition, setShadow} from '../../styles'

export const PrimaryBtn = styled.button`
display: inline-block;
color: ${setColor.primaryColor};
background: transparent;
border-color: ${setColor.mainBlue};
text-transform: capitalize;
padding: ${setRem(14)} ${setRem(20)};
font-size: ${setRem(16)};
${setLetterSpacing(2)};
cursor: pointer;
text-decoration: none;
outline:none;
border-radius: ${setRem(3)};
box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 transparent;
  -webkit-transition: ${setTransition};
  ${setTransition};
&:hover{
box-shadow: ${setShadow.buttonShd};
};

${props => 
`margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l ||0}`
};
`;

export const SmallBtn = styled(PrimaryBtn)`
padding: ${setRem(6)} ${setRem(12)};
font-size: ${setRem(14)};

`