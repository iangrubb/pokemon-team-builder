import React from 'react'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { colorOfType } from '../helpers/pokemonDisplayHelpers'

export default function TeamPokemon(props) {

    const { species, level, types, position, clickHandler } = props
    
    return (
       
        <Container position={position} onClick={clickHandler}>
            <h3>{species}</h3>
            <h5>Lv. {level}</h5>
            <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/back-normal/${species}.gif`} alt={species}/>
            <Types>
                {types.map((type, idx) => <Type key={idx} type={type}>{type}</Type>)}
            </Types>
        </Container>
            
    )
}

// Position isn't available while exiting

const transitionHandler = (transitionState, position) => {
    switch (transitionState) {
        case "entered":
            return `${3 + 16 * position}%`
        case "exiting":
            return '-20%'
        default:
            return '110%'
    }
}

const Container = styled.div`

    /* Component shape and style */
    width: 14%;
    height: 80%;
    border-radius: 16px;
    background: var(--main-ui-color);
    box-shadow: var(--diffuse-shadow);
    
    /* Makes card look clickable */
    cursor: pointer;

    /* Animates element within its parent */
    
    position: absolute;
    top: 10%;
    left: 3%;

    /* Centered column layout for children */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

const PokemonGIF = styled.img`
    height: 40%;
`

const Types = styled.div`

    /* Positions types in a row */
    display: flex;
    justify-content: center;
`

const Type = styled.h4`

    /* Spacing between types */
    margin: 0 4px;

    /* Use a darkened version of the color that corresponds to the type */
    color: ${props => colorOfType(props.type)};
    filter: var(--contrast-filter);

`
