import React from 'react'

import styled from 'styled-components'

import { gradientForTypes } from '../helpers/pokemonDisplayHelpers'

export default function StatBar(props) {

    const { stat, value, types } = props

    return (
        <Container>
            <Label>{stat}</Label>
            <BarFrame>
                <Bar value={value} types={types}/>
                <Value>{value}</Value>
            </BarFrame>
        </Container>
    )
}

const Container = styled.div`

    /* Component size */
    width: 90%;
    height: 24px;

    /* Row display for children */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Label = styled.span`

    /* Font alignment in parent */
    width: 32%;
    text-align: right;

    /* Font styling */
    font-weight: 700;
    color: #333;
`

const BarFrame = styled.span`

    /* Bar maximum size */
    width: 60%;
    height: 80%;
    
    /* Allows absolute positioning of child elements */
    position: relative;

`

const Bar = styled.span`

    /* Makes bar extend to the appropriate length */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${props => 100 - ( props.value / 2 )}%;

    /* Sets the appearance of the bar */
    background: ${props => gradientForTypes(props.types)};
    border-radius: 4px;
    box-shadow: var(--sharp-shadow);
`

const Value = styled.span`

    /* Value element positioning */
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    
    /* Shape and style of value element */
    height: 32px;
    width: 32px;
    border-radius: 50%;
    box-shadow: var(--sharp-contrast-shadow);
    background: var(--contrast-ui-color);

    /* Styles and centers text */
    color: var(--main-ui-color);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`
