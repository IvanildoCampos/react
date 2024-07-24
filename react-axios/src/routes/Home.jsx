import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import blogFetch from "../axios/config";

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data
      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (<p>carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
