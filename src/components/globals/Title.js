import React from 'react'
import styled from 'styled-components'
import {setRem, setLetterSpacing, setFont} from '../../styles'

 const Title = ({className, title, center}) => {
    return (
        <h3 className={className}>
          {title}  
        </h3>
    )
}

export default styled(Title)`
    font-size: ${setRem(30)};
    text-transform: capitalize;
    ${setLetterSpacing(5)};
    ${setFont.second};
    text-align: ${props => props.center? "center": "left"}
`;