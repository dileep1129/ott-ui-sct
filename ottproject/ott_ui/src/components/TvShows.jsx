import React from 'react'
import "./TVshows.scss"
function TVshows() {
  return (
      <div className="parent1">
     <div className="voyage1">
      <div className="overlay1">
        <div className="content left-align1">
          <h1 className="title1">Ninnu Kori</h1>
          <p className="description1">
          Ninnu Kori is a story of family relationships and human values.<br />

Narasimham and Susheela have two children, Vinay and Sumathi. Vinay grows up hating his father because of Narasimham's 
          </p>
          <div className="buttons1">
            <p className="trailer-btn1">▶ WatchTrailer</p>
            <p className="watch-btn1">▶ WatchNow</p>
          </div>
        </div>
      </div>
    </div>
        <div className="re1">
          <div className='re11'>
            <h3 className="recom1">Episodes</h3>
            <h3 className='recom1'>Details</h3>
          </div>
        <p className='watch-more1'>WatchMore</p>
        </div>
        <div className="Rec">
          <img src="/assets/images/tvshow.webp" alt="Recommended"  className="im11"/>
          <div className='synop'>
            <h3>Season3</h3>
            <p> he plot revolves around Uma (Nani), Pallavi (Thomas), and Arun (Pinisetty).
               When Uma declines her proposal to elope, Pallavi marries Arun and emigrates to the US.
            </p>
            </div>
        </div>
    </div>
  )
}
 
export default TVshows
