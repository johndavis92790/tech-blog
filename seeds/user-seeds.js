const { User } = require("../models");

const userdata = [
  {
    username: "User1",
    password: "password1",
  },
  {
    username: "User2",
    password: "password2",
  },
  {
    username: "User3",
    password: "password3",
  },
  {
    username: "User4",
    password: "password4",
  },
  {
    username: "User5",
    password: "password5",
  },
  {
    username: "User6",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
