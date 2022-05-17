import React, { Component } from 'react'
import YouTube from 'react-youtube'

    
  
class ReactYouTubeExample extends Component {

     

  videoOnReady (event) {
   
    event.target.playVideoAt(50) 
    console.log(event.target)   
  }



    
  render () { 
    const opts = {
      height: '390',
      width: '480',  
        margin: "auto",  
      paddingLeft: "60px",
      playerVars: { 
        //autoplay: 1 
      }
    }
    return (
       
          <div style={{
              margin: "auto"  
          }}
              className='centervideo'>
              <center>
      <YouTube
        videoId="t9OGF6o7pm8"   
        opts={opts}
        onReady={this.videoOnReady}
                  />
                  </center>  
              </div> 
    )
  }
}

export default ReactYouTubeExample;  