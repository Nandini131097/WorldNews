import { useState, useEffect } from "react";

function NewsCards() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          // Check the structure of the response data here
          // Assuming the response contains 'sources' array
          setNewsData(data.sources || []); // Update this based on the actual structure
        } else {
          console.error("Expected JSON, but got something else.");
        }
      } catch (error) {
        console.error('Error fetching the news data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="newsCardsContainer">
      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <div key={index} className="newsCard">
            <img src={news.urlToImage}></img>
            <h3>{news.name}</h3>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}

export default NewsCards;
