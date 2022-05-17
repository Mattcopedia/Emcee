import React from 'react'
import './article.css';
// note for css styling per component we use one dot notation ./

// we pass the image through props so that we can change the image displayed for each of our Article rather than just importing from Assets
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'> 
      <div className='gpt3__blog-container_article-image'>   
        <img src={imgUrl } alt="blog "/>  

      </div>
      <div className='gpt3__blog-container_article-content'>  
        <div>
          <p>{date}</p>
          <p>{title}</p>
        </div>
        <p>Read Full Article</p> 
      </div>
    </div>
  )
}

export default Article  
