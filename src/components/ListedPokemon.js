import React from 'react'

import styled from 'styled-components'

import { colorOfType, gradientForTypes } from '../helpers/pokemonDisplayHelpers'


export default function ListedPokemon(props) {

    const { types, level, species, clickHandler, selected, teamPosition } = props

    return (
        <Frame types={types} onClick={clickHandler}>
            <Body>
                <PokemonLevel>{level}</PokemonLevel>
                <h3>{species}</h3>
                {types.map((type, idx) => <PokemonType key={idx} >{type}</PokemonType>)}
                <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${species}.gif`} alt={species} />
            </Body>
            <TeamNumber onTeam={teamPosition > -1 }>{teamPosition > -1 ? teamPosition + 1 : null}</TeamNumber>
        </Frame>
    )
}

const Frame = styled.div`

    /* Sets card size and centers it in parent list */
    width: 80%;
    height: 100px;
    margin: 20px 10%;
    
    /* Sets card shape and border color */
    padding: 8px;
    border-radius: 16px;
    box-shadow: var(--sharp-shadow);
    background: black;

    /* Makes card look clickable */
    cursor: pointer;

    /* Allows absolute placement of team number */
    position: relative;
`

const Body = styled.div`

    /* Style for interior of card */
    width: 100%;
    height: 100%;
    background: var(--main-ui-color);
    border-radius: 8px;
       
    /* Positioning for children */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const PokemonLevel = styled.h4`

    /* Places level on the parent */
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);

    /* Puts the level in a circle */
    background: var(--contrast-ui-color);
    border-radius: 50%;
    padding: 8px;
    box-shadow: var(--sharp-contrast-shadow);

    /* Changes the color of the level */
    color: var(--main-ui-color);
`


const PokemonGIF = styled.img`

    /* Places gif on the parent */
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);

    /* Sets size of gif */
    width: 20%;
`

const PokemonType = styled.h4`

    /* Use a darkened version of the color that corresponds to the type */
    filter: var(--contrast-filter);
`

const TeamNumber = styled.div`

    /* Places the team number at the top left of the card */
    position: absolute;
    top: 0;
    left: 0;

    /* Number pops in and out when pokemon is added to or removed from team */
    transition: transform 0.2s ease;
    transform: translate(-30%, -30%) scale(${props => props.onTeam ? '1' : '0'}) ;
    
    /* Number circle styling */
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--contrast-ui-color);
    box-shadow: var(--sharp-contrast-shadow);

    /* Number text styling and centering */
    color: var(--main-ui-color);
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;

`
