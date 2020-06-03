import React from 'react'

import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { colorOfType } from '../helpers/pokemonDisplayHelpers'

export default function TeamPokemon(props) {

    const { species, level, types, position, clickHandler } = props
    
    return (
        <Transition in={position > -1} timeout={400} mountOnEnter unmountOnExit>
            {transition_state => (
                <Container position={position} onClick={clickHandler} transition_state={transition_state}>
                    <PokemonSpecies>{species}</PokemonSpecies>
                    <Level>Lv. {level}</Level>
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
            return '100%'
    }
}

const Container = styled.div`

    width: 14%;
    height: 80%;

    background: white;
    box-shadow: 4px 4px 16px #aaa;
    border-radius: 16px;

    cursor: pointer;

    position: absolute;

    top: 10%;
    left: ${props => transitionHandler(props.transition_state, props.position)};

    z-index: ${props => props.transition_state === "exiting" ? 1 : 2};

    transition: left 0.4s ease;

    display: ${props => props.position > -1 || props.transition_state === "exiting" ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

const PokemonSpecies = styled.h3`
    margin: 0;
    color: #333;
    text-transform: capitalize;
`

const Level = styled.h5`
    margin: 0;
    color: #333;
`

const PokemonGIF = styled.img`
    height: 40%;
`

const Types = styled.div`
    display: flex;
    justify-content: center;
`

const Type = styled.h3`

    margin: 0 4px;

    background: ${props => colorOfType(props.type)};
    padding: 4px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #aaa;

    color: white;
    font-weight: 700;
    font-size: 16px;
    text-shadow: 1px 1px 1px #555;

`
