import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <div className="card bg-neutral text-neutral-content p-4 mb-4">
      <h2 className="mb-2 card-title">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          {post.title}
        </a>
      </h2>
      <div className="mb-2 border-t border-gray-200 pt-2">
        <p className="text-sm">
          <strong>Author:</strong> {post.author}
        </p>
        <p className="text-sm">
          <strong>Subreddit:</strong> {post.subreddit}
        </p>
        <p className="text-sm">
          <strong>Ups:</strong> {post.ups}
        </p>
        <p className="text-sm">
          <strong>Comments:</strong> {post.num_comments}
        </p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    subreddit: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    num_comments: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;
