import React from 'react'

function Pagination({setCurrentPage,postperPage,totalPosts}) {

    const totalPages = Math.ceil(totalPosts / postperPage);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <div className='pagination'>
        {pageNumbers.map((number) => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
      
    </div>
  )
}

export default Pagination
