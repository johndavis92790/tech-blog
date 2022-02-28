const { Post } = require("../models");

const postdata = [
  {
    title: "Post #1",
    content: "This is a post #1",
    user_id: 1,
  },
  {
    title: "Post #2",
    content: "This is a post #2",
    user_id: 2,
  },
  {
    title: "Post #3",
    content: "This is a post #3",
    user_id: 3,
  },
  {
    title: "Post #4",
    content: "This is a post #4",
    user_id: 4,
  },
  {
    title: "Post #5",
    content: "This is a post #5",
    user_id: 5,
  },
  {
    title: "Post #6",
    content: "This is a post #6",
    user_id: 6,
  },
  {
    title: "Post #7",
    content: "This is a post #7",
    user_id: 1,
  },
  {
    title: "Post #8",
    content: "This is a post #8",
    user_id: 2,
  },
  {
    title: "Post #9",
    content: "This is a post #9",
    user_id: 3,
  },
  {
    title: "Post #10",
    content: "This is a post #10",
    user_id: 4,
  },
  {
    title: "Post #11",
    content: "This is a post #11",
    user_id: 5,
  },
  {
    title: "Post #12",
    content: "This is a post #12",
    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
