import React from 'react'
import './features.css';   
import { Feature } from '../../components'


const featuresData = [   
  {
  title: 'Improving end distrusts instantly ',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
},
   {
  title: 'Become the tended Active ',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
},
    {
  title: 'Message or am nothing ', 
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
},
     {
  title: 'Really boy county ',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
]

const Features = () => { 


  
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className=' gpt3__features-heading '>  
        <h1 className='gradient__text'>The Future is Now and You just Need to Realize it. Step into the Future Today and Make it Happen.</h1> 
        <p>Request Early Access to Get Started </p> 
        {/* note next we loop over 4 of our different features with a different text using map. we first create a variable to hold the content.*/} 

      </div>
      <div  className='gpt3__features-container'> 
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key ={ item.title + index } />   
           ))}   
      </div>

    </div> 
  )
}

export default Features;  
 