import React, { Component } from 'react'

import styled from 'styled-components'

import { gradientForTypes, colorOfType } from '../helpers/pokemonDisplayHelpers'

export default class DisplayedPokemon extends Component {
    test = { "test case": "beef"}
    render() {
        return (
            <Container selected={this.props.selected}>
                <PokemonBasics >
                    
                    <PokemonSpecies>{this.props.species}</PokemonSpecies>
                    <Level>Lv. {this.props.level}</Level>
                    <PokemonGIF src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${this.props.species}.gif`} alt={this.props.species}/>
                    <Types>
                        {this.props.types.map((type, idx) => <Type key={idx} type={type}>{type}</Type>)}
                    </Types>
                </PokemonBasics>
                <PokemonStatsFrame types={this.props.types}>
                    <PokemonStats>

                    </PokemonStats>
                </PokemonStatsFrame>
            </Container>
        )
    }
}

const Container = styled.div`

    height: 320px;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    padding: 32px;
    border-radius: 16px;

    box-shadow: 4px 4px 16px #aaa;

    position: absolute;
    top: ${props => props.selected ? '50%' : '-80%' };
    left: 50%;
    transform: translate(-50%, -50%);

    transition: all 0.4s ease;

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

    


`


const PokemonStatsFrame = styled.div`

    height: 100%;
    width: 300px;
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
    align-items: center;

`

