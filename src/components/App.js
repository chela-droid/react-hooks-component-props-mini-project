import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
// import Article from "./cArticle";


// console.log(blogData);
// const{name,image,about,posts}= blogData;

function App() {
  return (
    
    <div className="App">
      <Header name = {blogData.name}/>
      
      <About image= {blogData.image} about={blogData.about}/>

      <ArticleList posts={ blogData.posts}/>
      {/* <Header
      name={blogData.name}
      />
      <About
      image={blogData.image}
      about={blogData.about}
      />
      <ArticleList
      posts={blogData.posts}
      /> */}
    </div>
  );
}

export default App;


