const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "This is a comment #1",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is a comment #2",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
