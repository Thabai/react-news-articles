import React from "react";
import Stories from "./Stories";
import Article from './Article.js';

let Story = Stories.map((story)=>{
    return <Article
        title = {story.title}
        img={story.img}
        category= {story.category}
        story={story.story}
        />
      })
    
    export default Story;