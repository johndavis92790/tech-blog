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
  {
    comment_text: "This is a comment #3",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "This is a comment #4",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "This is a comment #5",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: "This is a comment #6",
    user_id: 6,
    post_id: 6,
  },

  {
    comment_text: "This is a comment #7",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is a comment #8",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "This is a comment #9",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "This is a comment #10",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "This is a comment #11",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: "This is a comment #12",
    user_id: 6,
    post_id: 6,
  },


  {
    comment_text: "This is a comment #13",
    user_id: 1,
    post_id: 7,
  },
  {
    comment_text: "This is a comment #14",
    user_id: 2,
    post_id: 8,
  },
  {
    comment_text: "This is a comment #15",
    user_id: 3,
    post_id: 9,
  },
  {
    comment_text: "This is a comment #16",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "This is a comment #17",
    user_id: 5,
    post_id: 11,
  },
  {
    comment_text: "This is a comment #18",
    user_id: 6,
    post_id: 12,
  },

  {
    comment_text: "This is a comment #19",
    user_id: 1,
    post_id: 7,
  },
  {
    comment_text: "This is a comment #20",
    user_id: 2,
    post_id: 8,
  },
  {
    comment_text: "This is a comment #21",
    user_id: 3,
    post_id: 9,
  },
  {
    comment_text: "This is a comment #22",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "This is a comment #23",
    user_id: 5,
    post_id: 11,
  },
  {
    comment_text: "This is a comment #24",
    user_id: 6,
    post_id: 12,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
