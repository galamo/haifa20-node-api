

const Joi = require("@hapi/joi")

const searchSchema = Joi.object().keys({
    searchBy: Joi.string().min(1).max(1).required(),
    inputValue: Joi.string().required()
})

const movieSchema = Joi.object().keys({
    id: Joi.string().max(30).required()
})

const validationsObj = {
    search: (req, res, next) => {
        const { error } = searchSchema.validate(req.query)
        if (error) {
            console.log(error.details)
            return res.send(error.details)
        }
        return next()
    }, movie: (req, res, next) => {
        const { error } = movieSchema.validate(req.params)
        if (error) {
            console.log(error.details)
            return res.send(error.details)
        }
        return next()
    }
}

function getValidationFunction(path) {
    return validationsObj[path]
}


module.exports = getValidationFunction