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
    width: 90%;
    height: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Label = styled.span`
    width: 32%;
    text-align: right;

    font-weight: 700;
    color: #333;
`

const BarFrame = styled.span`

    width: 60%;
    height: 80%;
    
    position: relative;

`

const Bar = styled.span`

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${props => 100 - ( props.value / 2 )}%;

    background: ${props => gradientForTypes(props.types)};
    border-radius: 4px;
    box-shadow: 2px 2px 2px #888;
`

const Value = styled.span`

    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    
    background: #333;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px #888;

    color: white;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
`
