import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  
    return (
      <div className="space">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
        <div className="blog">
          This is my blog!!!, what are u doing here imposter!!!, I'll call the cops
        </div>
      </div>
    );
  }

export default Home;