
# Styling in React: Styled Components and React Transition Group

## Introduction

The React ecosystem provides a wide variety of libraries to help you style and animate your applications.

Styled Components is a CSS-in-JS library. It's not a framework like Bootstrap or Semantic that build CSS for you. Instead, it's a tool for more effectively writing custom CSS. It has various advantages over writing CSS in an external style sheet, the most immediate of which is that it allows you to easily toggle the styling of your application so that it changes with your application state.

React Transition Group is a library that helps stage animated transitions. If you want to animate a component's state change, creation, or destruction, this library in conjunction with CSS transformations is often all you need.


## A Simple Styled Component

The Styled Components library exposes `styled` as a default export. This is an object with a key for each kind of HTML tag. Each of these keys contains a function that takes a string and returns a component with a style derived from the string.

Here's a basic example. If I want to make a red square using standard HTML and CSS, I might write this in a stylesheet:

```css
    .red-square {
        width: 100px;
        height: 100px;
        background: red;
    }
```

and then put this element in my JSX:

```html
    <div className="red-square"></div>
```

Using styled components, I define can define the style in the same file as the component I want to use it in:

```javascript
import styled from 'styled-components'

const RedSquare = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`
```

and then use this component in my JSX:

```html
    <RedSquare></RedSquare>
```

The syntax used by the ```styled``` import may be unfamiliar. Styled components uses tagged template literals, which are part of ES6. The details are a bit complicated, but basically what's going on is that ```styled.div``` is a function that expects a string as an argument--in this case, everything in the ``` `` ```. The function returns a component that gets stored in ```RedSquare```.



## Nested Syntax

Styled components supports SASS-inspired nested syntax. For example, if we want the ```ListedPokemon``` to lift up on hover, all we have to is put this code in the ```Frame``` styled component:

```javascript
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: scale(1.15);
        box-shadow: var(--diffuse-shadow);
    }
```

Here, the ```&``` symbol is working like ```this```, so the declaration says that whenever the use hovers over this component, it should get a bit bigger and have a shadow.

    


## Passing Props to Styled Components


Styles based on data

Pass types as prop
and then:
background: ${props => gradientForTypes(props.types)};

Pass type as prop, and then: 
color: ${props => colorOfType(props.type)};






Styles based on UI Changes

transform: ${props => props.selected ? 'translateX(5%)' : null};



 /* Makes arrow when pokemon is selected */
transition: clip-path 0.2s ease;
clip-path: ${props => props.selected ?
        'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' :
        'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)'
    };




## Toggling Global Styles




## 

add selected prop, and then: 

transition: top 0.2s ease;
top: ${props => props.selected ? '50%' : '-50%'};




## 

<Transition in={selected} timeout={100} mountOnEnter unmountOnExit >
    { transition_state => (
        <BaseComponent>
    )}
</Transition>

Add Transition state to Container in Base Component












## later

placing team pokemon cards


Placement of elements:
left: ${props => props.position > -1 ? 3 + 16 * props.position : 110}%;


Pass transition state prop

 <Transition in={position > -1} timeout={200} mountOnEnter unmountOnExit>
    { transition_state => (
        <BaseComponent>
    )}
</Transition>

${props => transitionHandler(props.transition_state, props.position)}

z-index: ${props => props.transition_state === "exiting" ? 1 : 2};




<TeamNumber onTeam={teamPosition > -1 }>{teamPosition > -1 ? teamPosition + 1 : null}</TeamNumber>
   
