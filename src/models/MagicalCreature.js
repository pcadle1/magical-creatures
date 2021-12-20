import creatures from '../creatures.js'

class MagicalCreature{
    constructor(name, magicalAbility, age){
        this.name = name
        this.ability = magicalAbility
        this.age = age
        this.ancient = null
    }

    isAncient(){
        return this.age >= 200
    }

    static findAll(){
        return creatures.map((creature) => {
            let {name, ability, age} = creature
            return new MagicalCreature(name, ability, age)
        })
    }

    static find(creature_name){
        let foundCreature = creatures.find(creature => {
            return creature.name === creature_name
        })
        return new MagicalCreature(foundCreature.name, foundCreature.ability, foundCreature.age)
    }
}

export default MagicalCreature