const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "test1",
    password: "test1",
  },
  {
    username: "test2",
    password: "test2",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
