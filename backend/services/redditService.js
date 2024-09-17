const axios = require("axios");

const searchPosts = async (query) => {
  try {
    const response = await axios.get(`https://www.reddit.com/search.json`, {
      params: {
        q: query,
        sort: "relevance",
      },
    });

    // Map through the results to get only relevant data
    const posts = response.data.data.children.map((child) => ({
      id: child.data.id,
      title: child.data.title,
      url: `https://www.reddit.com${child.data.permalink}`,
      author: child.data.author,
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching posts from Reddit:", error);
    throw error;
  }
};

module.exports = { searchPosts };
