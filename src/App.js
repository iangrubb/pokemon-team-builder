import React, { Component } from 'react'

import styled from 'styled-components'

import ListedPokemon from './ListedPokemon'

import pokemonData from './pokemonData'


export default class App extends Component {

  types = ["normal", "fire", "water", "grass", "electric", "psychic", "ice", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "dragon", "dark", "fairy"]



  render() {
      return (
        <Container>
          <PokemonList>
            {pokemonData.map((pokemon, idx) => <ListedPokemon key={idx} {...pokemon} />)}
          </PokemonList>
          <PokemonDisplay></PokemonDisplay>
          <PokemonTeam></PokemonTeam>
        </Container>
      )
  }
}

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  background: rgb(242, 242, 242);

  display: grid;
  grid-template-rows: 1fr 300px;
  grid-template-columns: 300px 1fr;

  background: white;

  & > * {
    background: rgb(240, 240, 240);
    box-shadow: inset 4px 4px 8px 2px #ddd;
    border-radius: 32px;
    margin: 16px;
  }

`

const PokemonList = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  overflow: scroll;
  padding: 24px 0;

  /* display: flex;
  flex-direction: column;
  align-items: center; */

`

const PokemonDisplay = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`

const PokemonTeam = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`
