import React from 'react'

import styled from 'styled-components'

import { Transition } from 'react-transition-group'

import StatBar from './StatBar'

import { gradientForTypes, colorOfType } from '../helpers/pokemonDisplayHelpers'

export default function DisplayedPokemon(props) {

    const { species, level, types, stats, selected} = props
    
    return (

        <Transition in={selected} timeout={200} mountOnEnter unmountOnExit >
            { transition_state => (
                <Container selected={selected} transition_state={transition_state}>
                <PokemonBasics >
                    <PokemonSpecies>{species}</PokemonSpecies>
                    <Level>Lv. {level}</Level>
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

const transitionAcross = state => {
    switch (state) {
        case "entered":
            return '50%'
        case "exiting":
            return '150%'
        default:
            return '-50%'
    }
}

const Container = styled.div`

    height: 320px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    padding: 32px;
    border-radius: 16px;

    box-shadow: 4px 4px 16px #aaa;

    cursor: pointer;

    position: absolute;
    top: ${props => transitionAcross(props.transition_state)};
    left: 50%;
    transform: translate(-50%, -50%);

    transition: top 0.4s ease;


    z-index: ${props => props.selected ? '2' : '1' };

`

const PokemonBasics = styled.div`

    margin: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

`

const PokemonSpecies = styled.h2`
    margin: 0;
    color: #333;
    text-transform: capitalize;
`

const Level = styled.h4`
    margin: 0;
    color: #333;
`

const PokemonGIF = styled.img`
    margin: 32px 0 32px 8px;
    transform: scale(1.4);
`

const Types = styled.div`
    display: flex;
    justify-content: center;
`

const Type = styled.h3`

    margin: 0 8px;

    background: ${props => colorOfType(props.type)};
    padding: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #aaa;

    color: white;
    font-weight: 900;
    font-size: 20px;
    text-shadow: 2px 2px #333;

`

const PokemonStatsFrame = styled.div`

    height: 100%;
    width: 360px;
    padding: 16px;

    background: ${props => gradientForTypes(props.types)};
    border-radius: 16px;
    box-shadow: 2px 2px 4px #aaa;

    display: flex;
    justify-content: center;
    align-items: center;

`

const PokemonStats = styled.div`

    width: 100%;
    height: 100%;
    background: white;

    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #aaa;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

