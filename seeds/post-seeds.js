const { Post } = require("../models");

const postdata = [
  {
    title: "This is a post #1",
    user_id: 1,
  },
  {
    title: "This is a post #2",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
