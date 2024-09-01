import React, { useEffect, useState } from "react";

function NewsCards({ category, currentPage, postperPage, newsData, setNewsData, setTotalPosts }) {
  const [state, setState] = useState(false);

  const timetaken = () => {
    setTimeout(() => {
      setState(true);
    }, 1500); // 1.5 seconds delay
  };

  useEffect(() => {
    timetaken(); // Initiate the delay on component mount

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setNewsData(Array.isArray(data.articles) ? data.articles : []); // Ensure data is an array
          setTotalPosts(data.articles ? data.articles.length : 0);
        } else {
          console.error("Expected JSON, but got something else.");
        }
      } catch (error) {
        console.error("Error fetching the news data:", error);
        setNewsData([]);
      }
    };

    fetchData();
  }, [category, setNewsData, setTotalPosts]);

  const lastPostIndex = currentPage * postperPage;
  const startPostIndex = lastPostIndex - postperPage;
  const currentData = Array.isArray(newsData) ? newsData.slice(startPostIndex, lastPostIndex) : [];

  return (
    <div className="newsCardsContainer">
      {state ? (
        currentData.length > 0 ? (
          currentData.map((news, index) => (
            <div key={index} className="newsCard">
              <img src={news.urlToImage} alt="Image not available" />
              <h3>{news.title}</h3>
              <p><b>Source: </b>{news.source.name}</p>
              <p><b>Published At: </b>{new Date(news.publishedAt).toLocaleDateString()}</p>
              <div id="Description">
                <p><b>Description: </b>{news.description}</p>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No news available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewsCards;
