
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

We can pass props to a Styled Component to adjust its style.

One use case is stylizing data. Let's say we want to style each ```ListedPokemon``` component based on the pokemon's types. We already have two functions to help with this: ```colorOfType``` returns a color for each type of pokemon and ```gradientForTypes``` returns a solid color for an array of one type and a gradient for an array of two types. To use these, add this to the ```Frame``` component:

```
    background: ${props => gradientForTypes(props.types)};
```

and this to the ```PokemonType``` component:

```
    color: ${props => colorOfType(props.type)};
```

Now if we pass a types prop to ```Frame``` and a type prop to ```PokemonType``` the colors should show up.

Notice that we interpolate *functions* from props onto string values. This is just how Styled Components is built to work. We couldn't just reference something like ```props.types``` directly, since props aren't defined in the context where we define a Styled Component.

We can also style UI related state this way, such as the currently selected pokemon. To do this, pass a ```selected``` prop to ```Frame``` and ```Body```, add this style to ```Frame```

```
    ${props => props.selected ? 'transform: translateX(5%);' : null}
```

and this style to ```Body```:

```
    transition: clip-path 0.2s ease;
    clip-path: ${props => props.selected ?
        'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' :
        'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)'
    };
```


## Toggling Global Styles

Let's enable day and night mode toggling next. Styled Components provides a ```createGlobalStyle``` export for creating styles that aren't associated with a specific component. I'm currently using this in ```App``` to create a component ```DayConstants``` that defines a set of CSS variables. Toggling day to night is as simple as toggling between this and a ```NightConstants``` component that assigns the same variables different values. So where ```DayConstants``` is currently found in ```App```, we put:

```html
    {this.state.light ? <DayConstants/> : <NightConstants/>}
```

## Card Sliding with CSS Transitions

Next, let's try to have the ```DisplayedPokemon``` slide in and out when a pokemon is selected. I'm currently using absolute positioning on this component, so we can slide the whole card up and down by transitioning between different ```top``` values. The basic strategy is to hide all the cards just off screen except the card of the selected pokemon. We can do that by adding the style:

```
    transition: top 0.2s ease;
    top: ${props => props.selected ? '50%' : '-50%'};
```

and passing a ```selected``` prop to ```Container```.

This works, but has a couple issues:

1. We're unnecessarily rendering many elements off screen.
2. We can't animate out in a different direction than we animate in.
   
Let's work on these next.


## Card Sliding with React Transition Group

React Transition Group has a few exports. We'll be using the ```Transition``` component. If we have a ```BaseComponent``` that we want to add transitions to, we wrap it in ```Transition``` as follows:

```html
   <Transition in={boolean} timeout={milliseconds} >
       { transition_state => (
           <BaseComponent>
       )}
   </Transition>
```

While ```Transition``` can accept many props, ```in``` and ```timeout``` are essential. The transition moves between four states:

1. ```"entering"``` -- when ```in``` is true and ```timeout``` hasn't elapsed.
2. ```"entered"``` -- when ```in``` is true and ```timeout``` has elapsed.
3. ```"exiting"``` -- when ```in``` is false and ```timeout``` hasn't elapsed.
4. ```"exited"``` -- when ```in``` is true and ```timeout``` has elapsed.

The current state gets passed in the ```transition_state``` variable and can be passed to ```BaseComponent``` as a prop.

Note: the only child of ```Transition``` is a function. This may look weird, but it's actually a common React technique called the Render Props Pattern. If you're curious about why this works, it's worth looking into the pattern as it's used in other contexts.

In our case, we'll wrap the ```DisplayedPokemon``` JSX in the following code:

```html
    <Transition in={selected} timeout={100} mountOnEnter unmountOnExit >
    { transition_state => (
           <!-- Everything Else -->
       )}
   </Transition>
```

The props ```mountOnEnter``` and ```unmountOnExit``` modify how transition works so that instead of there being an ```exited``` state, the component will be removed from the dom whenever it would have been in this state.

Now we just need to plug the ```transition_state``` into a styled component. Let's add this to the ```Container```:

```
    top: ${props => transitionHandler(props.transition_state)};
```

I've already provided the ```transitionHandler``` function, which will move the component from top to bottom as it enters, exists, and then exits.


## Dynamic Placement through Styled Components

Let's bring this all together by rendering a ```TeamPokemon``` for each pokemon on the user's team.

In order to determine the position that each of these cards should end up, we can do a bit of multiplication in the container component:

```
    transition: left 0.2s ease;
    left: ${props => props.position > -1 ? 3 + 16 * props.position : 110}%;
```

This will slide each card into and out of its appropriate position. I've chosen numbers so that six cards (the max number) can just take up the space with proper spacing between them.

But let's use React Transition Group to make this even better. We can wrap the component like this:

```html
    <Transition in={position > -1} timeout={200} mountOnEnter unmountOnExit>
       { transition_state => (
           <!-- Everything Else -->
       )}
    </Transition>
```

and now we can calculate the appropriate distance to the left based on both the transition state and targeted position of a card, by adding this to ```Containter```:

```
    ${props => transitionHandler(props.transition_state, props.position)}
```

For one final touch, let's make it so that a card that's leaving exists behind whatever cards remain. To do this, we can make the `z-index` of a card depend on its transition state, by adding this to ```Containter```: 

```
    z-index: ${props => props.transition_state === "exiting" ? 1 : 2};
```


