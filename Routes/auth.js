//Import required packages
const router = require('express').Router()
const User = require('../Models/User')

//Validation import
const Joi = require('joi')

//Defining Joi validation schema
const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email().lowercase(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

router.post('/register', async (req, res) => {
  const validation = await schema.validateAsync(req.body)
  res.send(validation)
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // })
  // try {
  //   const savedUser = await user.save()
  //   res.send(savedUser)
  // } catch (err) {
  //   res.status(400).send(err)
  // }
})

module.exports = router
