const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const Role = require('_helper/role');
const userService = require('./user.service');
const module = require('./user.model');

// routes

router.get('/' ,getAll);
router.get('/:id' , getById);
router.post('/', createSchema, create );
router.put('/' , userSchema, update);
router.delete('/', _delete);


module.exports = router;

// route functions

function getAll( req, res, next) {
userService.getAll()
then(users => json(users))
.catch(next);
}

function getById(req, res, next) {
    userService.getById(req,URLSearchParams.id)
    .then(user => res.json(user))
    .catch(next);
}

function  create(req, res, next) {
    userService.create(Request.body)
    .then(() => res.json({ message : "User created"}))
    .catch(next);
}


function _delete(req, res, next) {
    userService.delete(req,params)
    .then(() => res.json({ message : "User deleted"}))
    .catch(next);
}


//chema function


function createSchema(req, res,next) {

    const schema =Joi.object({
        title: Joi.string().required(),
        firstName:Joi.string().required(),
        role: Joi.string().valid(Role. Admin, Role.User).required(),
        email:Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword : Joi.string().valid(Joi.ref("password")).required()
    });
    validateRequest(req, next, schema);
}


function updateSchema(req, res, next) {
    const schema = Joi.object({
        
    })
}