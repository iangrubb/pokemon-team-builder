import React from 'react'

import styled from 'styled-components'

import { colorOfType, gradientForTypes } from '../helpers/pokemonDisplayHelpers'


export default function ListedPokemon(props) {

    const { types, level, species, clickHandler, selected, position } = props

    return (
        <Frame types={types} onClick={clickHandler} selected={selected}>
            <Body selected={selected}>
                <PokemonLevel>{level}</PokemonLevel>
                <PokemonInfo>
                    <PokemonSpecies>{species}</PokemonSpecies>
                    {types.map((type, idx) => <PokemonType key={idx} type={type}>{type}</PokemonType>)}
                </PokemonInfo>
                <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${species}.gif`} alt={species} />
            </Body>
            <TeamNumber onTeam={position >= 0 }>{position >= 0 ? position + 1 : null}</TeamNumber>
        </Frame>
    )
}

const Frame = styled.div`

    width: 80%;
    height: 100px;
    margin: 20px 10%;
    padding: 8px;

    background: ${props => gradientForTypes(props.types)};

    border-radius: 16px;
    box-shadow: 2px 2px 4px #aaa;

    transform: ${props => props.selected ? 'translateX(5%)' : null};

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.15);
        box-shadow: 4px 4px 8px #aaa;
    }

    position: relative;

`

const Body = styled.div`

    width: 100%;
    height: 100%;
    background: white;
    border-radius: 8px;

    padding: 0 8px;

    clip-path: ${props => props.selected ?
        'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' :
        'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)'
    };
    
    transition: all 0.2s ease;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

const PokemonLevel = styled.p`
    background: #333;
    border-radius: 50%;
    padding: 8px;

    color: white;
    font-weight: bold;
`

const PokemonInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

const PokemonGIF = styled.img`
    width: 25%;
    margin: 0 8px 0 0;
`

const PokemonSpecies = styled.h3`
    margin: 2px;
    color: #333;
    text-transform: capitalize;
`

const PokemonType = styled.h4`
    margin: 2px;
    color: ${props => colorOfType(props.type)};
    filter: saturate(200%) brightness(60%);
`

const TeamNumber = styled.div`

    position: absolute;

    top: 0;
    left: 0;

    transform: translate(-30%, -30%) scale(${props => props.onTeam ? '1' : '0'}) ;
    transition: transform 0.2s ease;

    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #333;
    box-shadow: 2px 2px 4px #aaa;

    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

`
