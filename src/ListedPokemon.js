import React, { Component } from 'react'

import styled from 'styled-components'

const colorOfType = type => {
    switch(type) {
        case "normal":
            return "#E6DDCB"
        case "fire":
            return "#D89E9C"
        case "water":
            return "#B3BDE0"
        case "grass":
            return "#A1D4A8"
        case "electric":
            return "#E9D795"
        case "psychic":
            return "#DAA9C5"
        case "ice":
            return "#D2E5EE"
        case "fighting":
            return "#D3A182"
        case "flying":
            return "#C8C8E0"
        case "poison":
            return "#BAA4C6"
        case "ground":
            return "#E8D2C0"
        case "rock":
            return "#D9C492"
        case "bug":
            return "#DCE2AC"
        case "ghost":
            return "#D0C7E0"
        case "steel":
            return "#ADADBD"
        case "dragon":
            return "#BFB9E9"
        case "dark":
            return "#797788"
        case "fairy":
            return "#ECC0CA"
        default:
            return "white"
    }
}

const determineBackground = types => {
    if (types.length === 1) {
        return colorOfType(types[0])
    } else {
        return `linear-gradient(45deg, ${colorOfType(types[0])} 20%, ${colorOfType(types[1])} 80%)`
    }
}

export default class ListedPokemon extends Component {



    render() {
        return (
            <Frame types={this.props.types} >
                <Body>
                    <PokemonLevel>{this.props.level}</PokemonLevel>
                    <PokemonInfo>
                        <PokemonSpecies>{this.props.species}</PokemonSpecies>
                        { this.props.types.map((type, idx) => <PokemonType key={idx} type={type}>{type}</PokemonType>)}
                    </PokemonInfo>
                    <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${this.props.species}.gif`} alt={this.props.species} />
                </Body>
            </Frame>
        )
    }
}

const Frame = styled.div`

    width: 80%;
    height: 100px;
    margin: 20px 10%;

    background: ${props => determineBackground(props.types)};

    border-radius: 16px;
    box-shadow: 4px 4px 4px #aaa;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.2);
        box-shadow: 4px 4px 8px #aaa;
    }

`

const Body = styled.div`

    width: calc(100% - 16px);
    height: calc(100% - 16px);
    background: white;
    border-radius: 8px;

    padding: 0 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

const PokemonLevel = styled.p`

    background: #333;
    color: white;
    padding: 8px;
    border-radius: 50%;
    font-weight: bold;

`

const PokemonInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

const PokemonGIF = styled.img`
    height: 60%;
    
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
