const Pet = require("../models/pet.model")

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.allPets = (req, res) => {
    Pet.find({}).sort({type:"asc"})
    .then(allPets => res.json(allPets))
    .catch(err => res.status(400).json(err))
}


module.exports.findOnePet = (req, res) => {
    const {id} = req.params
    Pet.findOne({_id: id})
        .then(onePet => res.json(onePet))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePet = (req, res) => {
    const {id} = req.params
    Pet.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    const {id} = req.params
    Pet.deleteOne({_id : id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}