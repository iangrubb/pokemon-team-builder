import React from 'react'

import styled from 'styled-components'

import { Transition } from 'react-transition-group'

import StatBar from './StatBar'

import { gradientForTypes, colorOfType } from '../helpers/pokemonDisplayHelpers'

export default function DisplayedPokemon(props) {
    
    const { species, level, types, stats, selected, clickHandler } = props
    
    return (

        <Transition in={selected} timeout={100} mountOnEnter unmountOnExit >
            { transition_state => (
                <Container selected={selected} transition_state={transition_state} onClick={clickHandler}>
                    <PokemonBasics >
                        <h2>{species}</h2>
                        <h4>Lv. {level}</h4>
                        <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${species}.gif`} alt={species}/>
                        <Types>
                            {types.map((type, idx) => <Type key={idx} type={type}>{type}</Type>)}
                        </Types>
                    </PokemonBasics>
                    <PokemonStatsFrame types={types}>
                        <PokemonStats>
                            { Object.keys(stats).map((stat, idx) => <StatBar key={idx} stat={stat} value={stats[stat]} types={types} />) }
                        </PokemonStats>
                    </PokemonStatsFrame>
                </Container>
            )}
        </Transition>
    )
}

const transitionHandler = state => {
    switch (state) {
        case "entering":
            return '-50%'
        case "entered":
            return '50%'
        case "exiting":
            return '150%'
        default:
            return '50%'
    }
}

const Container = styled.div`

    /* Arranges children in a row */
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* Card shape and color */
    height: 320px;
    width: 640px;
    padding: 32px;
    border-radius: 16px;
    background: var(--main-ui-color);
    box-shadow: var(--diffuse-shadow);

    /* Makes card look clickable */
    cursor: pointer;

    /* Animates element within its parent */
    position: absolute;
    top: ${props => transitionHandler(props.transition_state)};
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.2s ease;
`

const PokemonBasics = styled.div`

    /* Lays out children in a column */
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonGIF = styled.img`

    /* Fits the gif nicely in its parent */
    margin: 32px 0 32px 8px;
    transform: scale(1.4);
`

const Types = styled.div`

    /* Lays out types in a row */
    display: flex;
    justify-content: center;
`

const Type = styled.h4`

    /* Type display shape and style */
    margin: 0 4px;
    padding: 4px;
    border-radius: 8px;
    box-shadow: var(--sharp-shadow);
    background: ${props => colorOfType(props.type)};

    /* Type text style */
    color: var(--type-contrast-color);
    font-weight: 800;
    font-size: 24px;
    text-shadow: 1px 1px 1px #555;
`

const PokemonStatsFrame = styled.div`

    /* Stat frame shape and style */
    height: 100%;
    width: 360px;
    padding: 8px;
    background: ${props => gradientForTypes(props.types)};
    border-radius: 16px;
`

const PokemonStats = styled.div`

    /* Main stat region shape and style */
    width: 100%;
    height: 100%;
    background: var(--main-ui-color);
    border-radius: 8px;

    /* Determines position of stat elements */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`



