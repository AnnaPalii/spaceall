const Renter = require("./renter.js");
const Host = require("./host.js");

module.exports = function(sequelize, DataTypes) {
    const Object = sequelize.define("Object", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false}, 
    length: {
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    width:{
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    height:{
        type: DataTypes.INTEGER,
        isNumeric: true,
        allowNull: false}, 
    volume: {
        type: DataTypes.VIRTUAL,
        get() {return this.length * this.height * this.width;},
        set(value) {throw new Error('Do not try to set the volume value!');}
    }
});
return Object;
};