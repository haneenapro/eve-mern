import { comments, posts } from "../data/data";

// 19September
const HomePage = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="border-2 border-indigo-600">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
