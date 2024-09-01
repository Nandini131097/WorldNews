import React,{useEffect} from 'react';

function Categories({ category, setNewsData, setTotalPosts }) {
  useEffect(() => {
    

    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.articles || []);
        setTotalPosts(data.articles.length || 0);
      } catch (error) {
        console.error('Error fetching the news data:', error);
        setNewsData([]);
      }
    };

    fetchData();
  }, [category, setNewsData, setTotalPosts]);
  return (
    <div id='CategoriesDiv'>
      <h3>Categories</h3>
      <ul>
        <li id="cat-list1"><a href='/business'>Business</a></li>
        <li id="cat-list1"><a href='/'>General</a></li>
        <li id="cat-list2"> <a href='/sports'>Sports</a></li>
        <li id="cat-list3"><a href='/entertaintment'>Entertainment</a></li>
        <li id="cat-list4"><a href='/technology'>Technolog </a></li>
        <li id="cat-list5"><a href="/health">Health</a></li>
        <li id="cat-list5"><a href="/science">Science</a></li>

      </ul>
      
      <h3>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Loading...'}</h3>
      {/* Other UI elements */}


      
    </div>
  )
}

export default Categories
