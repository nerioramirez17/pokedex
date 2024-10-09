export interface IPokemon {
    id: number
    name: string,
    image: string,
    height: number,
    types: string,
    stats: {
    attack: string,
    defense: string,
    specialAttack: string,
    specialDefense: string,
    speed: string,
    }
    isSelected?: boolean
}

export interface IStatPokemon {
    effort: number,
    stat: {
      name: string,
      base_stat: number,
    }, 
    name: string,
    base_stat: number,
}

export interface IType {
    type: {
        name: string
    },
}