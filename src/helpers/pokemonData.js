
const pokemonData = [
    {
        id: 1,
        species: "pikachu",
        types: ["electric"],
        level: 51,
        stats: {
            HP: 35,
            Attack: 55,
            Defense: 40,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 90
        }
    },
    {
        id: 2,
        species: "venusaur",
        types: ["grass", "poison"],
        level: 42,
        stats: {
            HP: 80,
            Attack: 82,
            Defense: 83,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            Speed: 80
        }
    },
    {
        id: 3,
        species: "omastar",
        types: ["rock", "water"],
        level: 45,
        stats: {
            HP: 70,
            Attack: 60,
            Defense: 125,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            Speed: 55
        }
    },
    {
        id: 4,
        species: "arcanine",
        types: ["fire"],
        level: 44,
        stats: {
            HP: 90,
            Attack: 110,
            Defense: 80,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            Speed: 95
        }
    },
    {
        id: 5,
        species: "dewgong",
        types: ["water", "ice"],
        level: 47,
        stats: {
            HP: 90,
            Attack: 70,
            Defense: 80,
            "Sp. Attack": 70,
            "Sp. Defense": 95,
            Speed: 70
        }
    },
    {
        id: 6,
        species: "scyther",
        types: ["bug", "flying"],
        level: 42,
        stats: {
            HP: 70,
            Attack: 110,
            Defense: 80,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            Speed: 105
        }
    },
    {
        id: 7,
        species: "exeggutor",
        types: ["grass", "psychic"],
        level: 41,
        stats: {
            HP: 95,
            Attack: 95,
            Defense: 85,
            "Sp. Attack": 125,
            "Sp. Defense": 75,
            Speed: 55
        }
    },
    {
        id: 8,
        species: "starmie",
        types: ["water", "psychic"],
        level: 46,
        stats: {
            HP: 60,
            Attack: 75,
            Defense: 85,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            Speed: 115
        }
    },
    {
        id: 9,
        species: "snorlax",
        types: ["normal"],
        level: 45,
        stats: {
            HP: 160,
            Attack: 110,
            Defense: 65,
            "Sp. Attack": 65,
            "Sp. Defense": 110,
            Speed: 30
        }
    },
    {
        id: 10,
        species: "gyarados",
        types: ["water", "flying"],
        level: 38,
        stats: {
            HP: 95,
            Attack: 125,
            Defense: 79,
            "Sp. Attack": 60,
            "Sp. Defense": 100,
            Speed: 81
        }
    },
    {
        id: 11,
        species: "gengar",
        types: ["ghost", "poison"],
        level: 38,
        stats: {
            HP: 60,
            Attack: 65,
            Defense: 60,
            "Sp. Attack": 130,
            "Sp. Defense": 75,
            Speed: 110
        }
    },
    {
        id: 12,
        species: "aerodactyl",
        types: ["rock", "flying"],
        level: 40,
        stats: {
            HP: 80,
            Attack: 105,
            Defense: 65,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            Speed: 130
        }
    },
    {
        id: 13,
        species: "dragonair",
        types: ["dragon"],
        level: 43,
        stats: {
            HP: 61,
            Attack: 84,
            Defense: 65,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            Speed: 70
        }
    },
    {
        id: 14,
        species: "feraligatr",
        types: ["water"],
        level: 42,
        stats: {
            HP: 85,
            Attack: 105,
            Defense: 100,
            "Sp. Attack": 79,
            "Sp. Defense": 83,
            Speed: 78
        }
    },
    {
        id: 15,
        species: "steelix",
        types: ["steel", "ground"],
        level: 41,
        stats: {
            HP: 75,
            Attack: 85,
            Defense: 200,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            Speed: 30
        }
    },
    {
        id: 16,
        species: "umbreon",
        types: ["dark"],
        level: 44,
        stats: {
            HP: 95,
            Attack: 65,
            Defense: 110,
            "Sp. Attack": 60,
            "Sp. Defense": 130,
            Speed: 65
        }
    },
    {
        id: 17,
        species: "skarmory",
        types: ["steel", "flying"],
        level: 38,
        stats: {
            HP: 65,
            Attack: 80,
            Defense: 140,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            Speed: 70
        }
    },
    {
        id: 18,
        species: "houndoom",
        types: ["dark", "fire"],
        level: 46,
        stats: {
            HP: 75,
            Attack: 90,
            Defense: 50,
            "Sp. Attack": 110,
            "Sp. Defense": 80,
            Speed: 95
        }
    },
    {
        id: 19,
        species: "heracross",
        types: ["bug", "fighting"],
        level: 41,
        stats: {
            HP: 80,
            Attack: 125,
            Defense: 75,
            "Sp. Attack": 40,
            "Sp. Defense": 95,
            Speed: 85
        }
    },
    {
        id: 20,
        species: "tyranitar",
        types: ["rock", "dark"],
        level: 41,
        stats: {
            HP: 100,
            Attack: 134,
            Defense: 110,
            "Sp. Attack": 95,
            "Sp. Defense": 100,
            Speed: 61
        }
    },
    {
        id: 21,
        species: "blaziken",
        types: ["fire", "fighting"],
        level: 42,
        stats: {
            HP: 80,
            Attack: 120,
            Defense: 70,
            "Sp. Attack": 110,
            "Sp. Defense": 70,
            Speed: 80
        }
    },
    {
        id: 22,
        species: "gardevoir",
        types: ["psychic", "fairy"],
        level: 44,
        stats: {
            HP: 68,
            Attack: 65,
            Defense: 65,
            "Sp. Attack": 125,
            "Sp. Defense": 115,
            Speed: 80
        }
    },
    {
        id: 23,
        species: "flygon",
        types: ["ground", "dragon"],
        level: 45,
        stats: {
            HP: 80,
            Attack: 100,
            Defense: 80,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            Speed: 100
        }
    },
    {
        id: 24,
        species: "altaria",
        types: ["dragon", "flying"],
        level: 46,
        stats: {
            HP: 75,
            Attack: 70,
            Defense: 90,
            "Sp. Attack": 70,
            "Sp. Defense": 105,
            Speed: 80
        }
    },
    {
        id: 25,
        species: "metagross",
        types: ["steel", "psychic"],
        level: 45,
        stats: {
            HP: 80,
            Attack: 135,
            Defense: 130,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            Speed: 70
        }
    },
    
    


]


export default pokemonData