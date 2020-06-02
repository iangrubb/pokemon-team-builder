import React from 'react'

import styled from 'styled-components'

export default function TeamPokemon(props) {

    const { species, position } = props
    
    return (
        <Container position={position}>
            { species }
        </Container>
    )
    
}

const Container = styled.div`

    width: 14%;
    height: 80%;

    background: white;
    box-shadow: 4px 4px 16px #aaa;
    border-radius: 16px;

    position: absolute;
    top: 10%;
    left: ${props => 3 + 16 * props.position }%;

    display: ${props => props.position === -1 ? 'none' : 'flex'};


`
