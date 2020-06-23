import React, { Component } from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import ListedPokemon from './components/ListedPokemon'
import DisplayedPokemon from './components/DisplayedPokemon'
import TeamPokemon from './components/TeamPokemon'

import pokemonData from './helpers/pokemonData'

import { BulbOutlined } from '@ant-design/icons'


const DayConstants = createGlobalStyle`
  :root {
    --main-ui-color: #F8F7F7;
    --variant-ui-color: #F0EFEF;
    --contrast-ui-color: #333;
    --type-contrast-color: #eee;

    --contrast-filter: saturate(150%) brightness(70%);

    --diffuse-shadow: 4px 4px 8px 2px #D4CECE;
    --diffuse-inset-shadow: inset 4px 4px 8px 4px #D4CECE;
    --sharp-shadow: 2px 2px 4px #B5AAAA;
    --sharp-contrast-shadow: 2px 2px 4px #333;
  }
`

const NightConstants = createGlobalStyle`
  :root {
    --main-ui-color: #4D4C4D;
    --variant-ui-color: #2B2A2D;
    --contrast-ui-color: #D7D8DA;
    --type-contrast-color: #eee;

    --contrast-filter: saturate(60%) brightness(120%);

    --diffuse-shadow: 2px 2px 0 1px #D7D8DA;
    --diffuse-inset-shadow: inset 2px 2px 0 1px  #D7D8DA;
    --sharp-shadow: 1px 1px 0 #D7D8DA;
    --sharp-contrast-shadow: 1px 1px 0 #D7D8DA;
  }
`

export default class App extends Component {

  state = { selected: 1, team: [], light: true }

  setSelected = id => () => this.setState({selected: id})

  addToTeam = id => () => {
    if (!this.state.team.find(n => n === id) && this.state.team.length < 6) {
      this.setState({team: [...this.state.team, id ] })
    }
  }

  removeFromTeam = id => () => {
    this.setState({team: this.state.team.filter(n => n !== id )})
  }

  toggleLight = () => this.setState({light: !this.state.light})
  
  render() {
      return (
        <Page>
          <DayConstants/>
          <PokemonList>
            {pokemonData.map(pokemon =>
              <ListedPokemon
                key={pokemon.id}
                {...pokemon}
                selected={pokemon.id === this.state.selected}
                teamPosition={ this.state.team.indexOf(pokemon.id)}
                clickHandler={this.setSelected(pokemon.id)}
              />
            )}
          </PokemonList>
          <PokemonDisplay>
            {/* {pokemonData.slice(0, 1).map(pokemon =>
              <DisplayedPokemon
                key={pokemon.id}
                {...pokemon}
                selected={pokemon.id === this.state.selected}
                clickHandler={this.addToTeam(pokemon.id)}
              />
            )} */}
          </PokemonDisplay>
          <PokemonTeam>
            {/* {pokemonData.slice(0, 1).map(pokemon => 
              <TeamPokemon
                key={pokemon.id}
                {...pokemon}
                position={this.state.team.indexOf(pokemon.id)}
                clickHandler={this.removeFromTeam(pokemon.id)}
              />
            )} */}
          </PokemonTeam>
          <StyleToggler onClick={this.toggleLight}><Bulb/></StyleToggler>
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
  & > section {
    background: var(--variant-ui-color);
    box-shadow: var(--diffuse-inset-shadow);
    border-radius: 32px;
    margin: 16px;
  }
`

const PokemonList = styled.section`

  /* Takes up both rows of the first column */
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  /* Makes Pokemon fit nicely within the list */
  overflow: scroll;
  padding: 24px 0;
`

const PokemonDisplay = styled.section`

  /* Takes up the first row of the second column */
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  
  /* Allows animated transitions within this region */
  overflow: hidden;
  position: relative;
`

const PokemonTeam = styled.section`

  /* Takes up the second row of the second column */
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  /* Allows animated transitions within this region */
  overflow: hidden;
  position: relative;
`

const StyleToggler = styled.div`

  /* Toggler circle styling */
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--main-ui-color);
  box-shadow: var(--sharp-shadow);

  /* Positions Toggler on top right of screen */
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 3;

  /* Makes div look clickable */
  cursor: pointer;

  /* Center bulb in circle */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bulb = styled(BulbOutlined)`
  color: var(--contrast-ui-color);
  font-size: 24px;
`