import express from "express"
import MagicalCreature from "../models/MagicalCreature.js"
const fields = ['title', 'url', 'description']
const magicalCreaturesRouter = new express.Router()
const creatures = MagicalCreature.findAll()

magicalCreaturesRouter.get('/', (req, res) => {
    res.render('magic', { creatures: creatures })
})

magicalCreaturesRouter.get('/:creatureType', (req, res) => {
    const creatureName = req.params.creatureType
    const creature = MagicalCreature.find(creatureName)
    if(creature){
        if(creature.isAncient()){
            creature.ancient = 'Ancient!'
        }
        res.render('creatureInfo', {creature: creature})
    }else{
        res.status(404).send('Creature not found.')
    }
})

export default magicalCreaturesRouter