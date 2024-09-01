function NewsCards({currentPage, postperPage, newsData}) {

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
