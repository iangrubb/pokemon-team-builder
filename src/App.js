import React, { Component } from 'react'

import styled from 'styled-components'

import ListedPokemon from './components/ListedPokemon'
import DisplayedPokemon from './components/DisplayedPokemon'
import TeamPokemon from './components/TeamPokemon'

import pokemonData from './helpers/pokemonData'

export default class App extends Component {

  state = { selected: 0, team: [] }

  setSelected = idx => () => this.setState({selected: idx})

  addToTeam = idx => () => {
    if (!this.state.team.find(n => n === idx + 1) && this.state.team.length < 6) {
      this.setState({team: [...this.state.team, idx + 1] })
    }
  }

  removeFromTeam = idx => () => {
    this.setState({team: this.state.team.filter(n => n !== idx + 1)})
  }
  
  render() {
      return (
        <Page>
          <PokemonList>
            {pokemonData.map((pokemon, idx) =>
              <ListedPokemon
                key={idx}
                {...pokemon}
                selected={idx === this.state.selected}
                position={ this.state.team.indexOf(idx + 1)}
                clickHandler={this.setSelected(idx)}
              />
            )}
          </PokemonList>
          <PokemonDisplay>
            {pokemonData.map((pokemon, idx) =>
              <DisplayedPokemon
                key={idx}
                {...pokemon}
                selected={idx === this.state.selected}
                clickHandler={this.addToTeam(idx)}
              />
            )}
          </PokemonDisplay>
          <PokemonTeam>
            {pokemonData.map((pokemon, idx) => 
              <TeamPokemon
                key={idx}
                {...pokemon}
                position={this.state.team.indexOf(idx + 1)}
                clickHandler={this.removeFromTeam(idx)}
              />
            )}
          </PokemonTeam>
        </Page>
      )
  }
}

const Page = styled.div`

  /* Page takes up the entire screen */
  width: 100vw;
  height: 100vh;
  background: var(--main-ui-color);

  /* Page is a 2 x 2 grid */
  display: grid;
  grid-template-rows: 1fr 320px;
  grid-template-columns: 320px 1fr;

  /* Styling that applies to all three grid regions */
  & > * {
    background: var(--variant-ui-color);
    box-shadow: var(--diffuse-inset-shadow);
    border-radius: 32px;
    margin: 16px;
  }
`

const PokemonList = styled.div`

  /* Takes up both rows of the first column */
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  /* Makes Pokemon fit nicely within the list */
  overflow: scroll;
  padding: 24px 0;
`

const PokemonDisplay = styled.div`

  /* Takes up the first row of the second column */
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  
  /* Allows animated transitions within this region */
  overflow: hidden;
  position: relative;
`

const PokemonTeam = styled.div`

  /* Takes up the second row of the second column */
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  /* Allows animated transitions within this region */
  overflow: hidden;
  position: relative;
`
