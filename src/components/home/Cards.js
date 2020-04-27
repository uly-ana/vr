import React, { Component } from 'react'
import Card from './Card'
import styled from "styled-components"
import Title from '../globals/Title'
import Section from '../globals/Section'
import cards from './data'
import {setColor, setRem, media, setShadow } from '../../styles'

export default class Cards extends Component {
    state = {
        cards: cards
    }
    render() {
        return (
            <Section color={setColor.mainBlack} >
                <Title title="Price List" center/>
                <CardsCenter>
                   {this.state.cards.map(card => {
                       return <Card key={card.id} card={card}/>
                   })} 
                </CardsCenter>
            </Section>
        )
    }
}

const CardsCenter = styled.div`
width: 70vw;
margin: 0 auto;


${media.large`
width: 100vw;
max-width: 1170px;
`};

display: grid;
grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
grid-column-gap: ${setRem(45)};
`;
