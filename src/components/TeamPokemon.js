import React from 'react'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { colorOfType } from '../helpers/pokemonDisplayHelpers'

export default function TeamPokemon(props) {

    const { species, level, types, position, clickHandler } = props
    
    return (
        <Transition in={position > -1} timeout={200} mountOnEnter unmountOnExit>
            {transition_state => (
                <Container position={position} onClick={clickHandler} transition_state={transition_state}>
                    <h3>{species}</h3>
                    <h5>Lv. {level}</h5>
                    <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/back-normal/${species}.gif`} alt={species}/>
                    <Types>
                        {types.map((type, idx) => <Type key={idx} type={type}>{type}</Type>)}
                    </Types>
                </Container>
            )}
        </Transition>
    )
}

// Position isn't available while exiting

const transitionHandler = (state, position) => {
    switch (state) {
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
    transition: left 0.2s ease;
    position: absolute;
    top: 10%;
    left: ${props => transitionHandler(props.transition_state, props.position)};
    z-index: ${props => props.transition_state === "exiting" ? 1 : 2};

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
