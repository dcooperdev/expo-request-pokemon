export class Pokemon {
    constructor(name = '', url = '') {
        this.name = name;
        this.url = url;
    }
}
export class PokemonsList {
    list = [];
    constructor(pokemonsList) {
        const {count, next, previous, results} = pokemonsList
        this.count = count;
        this.next = next;
        this.previous = previous;

        results.forEach(pokemon => {
            if (pokemon) {
                const name = pokemon.name;
                const url = pokemon.url;
                this.list.push(new Pokemon(name, url));
            }
        });
    }

    getNextPage() {
        return this.next;
    }

    getPreviousPage() {
        return this.previous;
    }

    getList() {
        return this.list;
    }
}

export class PokemonDetail {
    constructor(id, name, sprites, types, weight) {
        this.id = id;
        this.name = name;
        this.sprites = this.setSprites(sprites);
        this.types = this.setTypes(types);
        this.weight = weight;
    }

    setSprites(json) {
        return {
            frontSprite: json?.other['official-artwork']?.front_default,
            shinySprite: json?.other['official-artwork']?.front_shiny
        }
    }

    setTypes(json) {
        const types = [];
        json.forEach(el => types.push(el.type.name));
        return types.toString().replaceAll(',', ', ');
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            sprites: this.sprites,
            types: this.types,
            weight: this.weight
        }
    }
}
