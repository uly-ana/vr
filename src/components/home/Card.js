import React from 'react'
import styled from 'styled-components'
import {SmallBtn} from '../globals/Buttons'
import {setShadow, setRem, setLetterSpacing, setColor, setBorder, media, setTransition} from '../../styles'
import PropTypes from 'prop-types'

 const Card = ({className, card}) => {
    const {img='', title='', info='', price=0} = card;
    return (
        <article className={className}>
            <div className="img-container">
                <img src={img} alt="single card"></img>
                <div className="price">${price}</div>
            </div>
            <div className="card-info">
                {/* <h4>{title}</h4> */}
                <p>{info}</p>
                <SmallBtn>Add</SmallBtn>
            </div>
            
        </article>
    )
}

export default styled(Card)`
background: ${setColor.mainBlack};
margin: ${setRem(32)} 0;
.img-container {
    background: ${setColor.mainBlack};
    position: relative;
    width: 100%;
    
    img {
        width: 100%;
        display: block;
        ${setTransition};
        opacity: 0.4;
    }
    &:hover img {
        opacity: 1;
    }
    .price {
        position: absolute;
        top: 90%;
        left: 80%;
        transform: translate(-50%, -50%);
        color: ${setColor.mainBlue};
        ${setLetterSpacing(5)};
        padding: ${setRem(5)} ${setRem(15)};
        opacity: 0;
        ${setTransition()};
        border: 1px solid ${setColor.primaryColor};
        border-radius: 50px;
        font-size: ${setRem(10)};
    }
        &:hover .price{
            opacity: 1;
            font-size: ${setRem(20)};
        }
}

.card-info {
    padding: ${setRem(30)} ${setRem()};

    p{
        ${setLetterSpacing()};
        font-size: ${setRem(14)};
    }
}

box-shadow: ${setShadow.cardShd};
${setTransition()};
&:hover {
  box-shadow: ${setShadow.cardShdDarker};
}

`;

Card.propTypes = {
  card: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
  })
}