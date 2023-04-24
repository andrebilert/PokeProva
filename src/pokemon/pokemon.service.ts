import { writeFile } from "fs/promises"

export class PokemonService {
    constructor(){}
            
    async getPokemon(){
        let pokeTime: any = []

        await fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => {
            pokeTime = data.results
        })
        return pokeTime
    }

    async timesPokemon() {
        const result = await this.getPokemon()
        let time1: any = []
        let time2: any = []

        while(time1.length < 6){
            let randomIndex = Math.floor(Math.random() * result.length)
            let randomObject: any = result[randomIndex]
            if(!time1.includes(randomObject)){
                time1.push(randomObject)
            }
        }

        while(time2.length < 6){
            let randomIndex = Math.floor(Math.random() * result.length)
            let randomObject: any = result[randomIndex]
            if(!time2.includes(randomObject) && !time1.includes(randomObject)){
                time2.push(randomObject)
            }
        }
        await writeFile('time1.json', JSON.stringify(time1, null, 2))
        await writeFile('time2.json', JSON.stringify(time2, null, 2))
        return "pokemons inserted into times successfully!"
        }

        async getPokemonId(id){
            let pokemon: any = []
            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                pokemon = data
            })
            return pokemon
        }
}