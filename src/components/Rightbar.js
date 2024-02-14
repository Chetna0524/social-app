import React from 'react'

function Rightbar() {

  const listItem = (title, timeStamp) => {
    return(
      <>
        <li>
          <h2>{title}<span>{timeStamp}</span></h2>          
        </li>

      </>
    )
  }


  return (
    <div className='rightbar'>
      <h3>News</h3>
      <ul>
        {listItem('Atomberg raises $82 million','1 Day ago')}
        {listItem('India evolving e-commerce market','2 Day ago')}
        {listItem('Big VC funds for smaller cities','1 Day ago')}
        {listItem('Atomberg raises $82 million','1 Day ago')}
        {listItem('India evolving e-commerce market','1 Day ago')}
        
      </ul>
    </div>
  )
}

export default Rightbar