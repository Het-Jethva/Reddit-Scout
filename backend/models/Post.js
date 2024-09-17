const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    subreddit: {
        type: String,
        required: false // or true, depending on your requirements
    },
    score: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
