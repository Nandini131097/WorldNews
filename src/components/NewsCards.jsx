import React,{useEffect} from "react";

function NewsCards({currentPage, postperPage, newsData,setNewsData,setTotalPosts}) {

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${import.meta.env.VITE_API_KEY}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          
          
          // Check the structure of the response data here
          // Assuming the response contains 'sources' array
          setNewsData(data.sources || []); // Update this based on the actual structure
          setTotalPosts(data.sources.length || 0)
        } else {
          console.error("Expected JSON, but got something else.");
        }
      } catch (error) {
        console.error('Error fetching the news data:', error);
      }
    };

    fetchData();
  }, []);



  const lastPostIndex=currentPage*postperPage;
        const startPostIndex= lastPostIndex-postperPage;
        const currentData= newsData.slice(startPostIndex,lastPostIndex)

  return (
    <div className="newsCardsContainer">
      {currentData.length > 0 ? (
        currentData.map((news, index) => (
          <div key={index} className="newsCard">
            <img src={news.urlToImage}></img>
            <h3>{news.name}</h3>
            <p><b>Category: </b>{news.category}</p>
            <p><b>Language: </b>{news.language}</p>
            <p><b>Country: </b>{news.country}</p>
            <div id='Description'>
            <p><b>Description: </b>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
            </div>
            
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}

export default NewsCards;
