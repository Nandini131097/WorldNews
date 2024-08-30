import React ,{useEffect}from 'react'

function NewsCards() {
  const newsData = [
    {
      id: 1,
      imgSrc: 'path_to_image_1.jpg',
      category: 'Category 1',
      description: 'This is the description for category 1.'
    },
    {
      id: 2,
      imgSrc: 'path_to_image_2.jpg',
      category: 'Category 2',
      description: 'This is the description for category 2.'
    },
    {
      id: 4,
      imgSrc: 'path_to_image_2.jpg',
      category: 'Category 2',
      description: 'This is the description for category 2.'
    },
    {
      id: 3,
      imgSrc: 'path_to_image_2.jpg',
      category: 'Category 2',
      description: 'This is the description for category 2.'
    },
    // Add more objects as needed
  ];

 


  return (
    
    <div className="newsCardsContainer">
      {newsData.map((news) => (
        <div key={news.id} className="newsCard">
          <img src={news.imgSrc} alt={`Image for ${news.category}`} />
          <h3>{news.category}</h3>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsCards
