const { DataTypes } = require('sequelize');

module.exports = module;


function model(sequelize) {
const attributes = {
email: { types: DataTypes.STRING, allowAll: false },
passwordHash: { type: DataTypes.STRING, allowAll:false },
title: { type: DataTypes.STRING, allowAll:false },
Firstname : { type: DataTypes.STRING, allowAll:false },
Lastname: { type: DataTypes.STRING, allowAll:false },
role: { type: DataTypes.STRING, allowAll:false }
};

const options = {
defaultScope: {
// exclude password hash by default
attributes: { exclude: ['passwordHash'] }
},
scopes: {
withHash : { attributes : {} ,}
}
};

return sequelize.define('User', attributes, options)
}
