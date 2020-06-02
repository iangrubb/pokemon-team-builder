
export const colorOfType = type => {
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

export const gradientForTypes = types => {
    if (types.length === 1) {
        return colorOfType(types[0])
    } else {
        return `linear-gradient(45deg, ${colorOfType(types[0])} 20%, ${colorOfType(types[1])} 80%)`
    }
}