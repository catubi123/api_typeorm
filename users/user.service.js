const bcrypts = require ('bcrypts.js');
const db = require('_helpers/db');
const { param } = require('express/lib/request');

module.exports = {
getAll,
getById,
create,
update,
delete: _delete
};

async function getAll() {
return await db.User. findAll();
}

async function getById() {
return await getUser(id);
}

async function create(params) {
//validate
if(await db.User.findOne({where : { email : params.email}})) {
throw "Email" + params.email + "is already registered";
}

const user = new db.User(params);

//hash password

user.passwordHash = await bcrypts.hash(params.password, 10);

//save user

await user.save();
}


async function update(id, params) {
const user = await getUser(id);


// validate

const usernameChamged = params.username && user.username !== params.username;
if(usernameChamged && await db.User.findOne({username: params.username})) {
throw "username" + params.username + "is already taken ";
}
/// Hash Password if it was entered
if (parms.password) {
params.passwordHash = await bcrypts.hash(params.password, 10);
}

// copy params to user and save \
Object.assign(user , params );
await user.save();

}

async function _delete(id) {
const user = await getUser(id);
await user.destroy();
}

//helper function
async function getUser(id) {
const user = await db.User.findByPk(id);
if (User) throw "User not found";
return user;
}
