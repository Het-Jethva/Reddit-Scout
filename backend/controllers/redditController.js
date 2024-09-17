require("dotenv").config();
const axios = require("axios");

const redditApi = axios.create({
  baseURL: "https://www.reddit.com",
  headers: {
    "User-Agent": "InnovateBots",
  },
});

exports.searchPosts = async (req, res) => {
  const { query } = req.query; // Extracting the query parameter from the request

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await redditApi.get(`/search.json`, {
      params: { q: query }, // Passing the query parameter to the Reddit API
    });

    const posts = response.data.data.children.map((post) => ({
      title: post.data.title,
      url: post.data.url,
      author: post.data.author,
      subreddit: post.data.subreddit,
      created: post.data.created_utc,
      ups: post.data.ups,
      num_comments: post.data.num_comments,
    }));

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Reddit" });
  }
};
