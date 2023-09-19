import React from 'react'
import Projuct from '../Product/Projuct'
import './Home.css'
import { rawData } from '../Product/RawData'

const Home = () => {
  console.log(rawData[0].title);
  return (
    <div className='home'>
        <img src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" className='hero_img' alt="" />
      <div className='home_row'>
      <Projuct  title={rawData[0].title}
      img={rawData[0].img} 
      price={rawData[0].price} 
      rating={rawData[0].rating}
      id={rawData[0].id}
      amount={rawData[0].amount} />
      <Projuct title={rawData[1].title}
      img={rawData[1].img} 
      price={rawData[1].price} 
      rating={rawData[1].rating}
      id={rawData[1].id}
      amount={rawData[1].amount} />
      <Projuct title={rawData[2].title}
      img={rawData[2].img} 
      price={rawData[2].price} 
      rating={rawData[2].rating}
      id={rawData[2].id}
      amount={rawData[2].amount} />
      <Projuct title={rawData[3].title}
      img={rawData[3].img} 
      price={rawData[3].price} 
      rating={rawData[3].rating}
      id={rawData[3].id}
      amount={rawData[3].amount} />
      
      </div>
      <div className='home_row'>
      <Projuct title={rawData[4].title}
      img={rawData[4].img} 
      price={rawData[4].price} 
      rating={rawData[4].rating}
      id={rawData[4].id}
      amount={rawData[4].amount} />
      <Projuct title={rawData[5].title}
      img={rawData[5].img} 
      price={rawData[5].price} 
      rating={rawData[5].rating}
      id={rawData[5].id}
      amount={rawData[5].amount}  />
      </div>

      <div className='home_row'>
      <Projuct title={rawData[6].title}
      img={rawData[6].img} 
      price={rawData[6].price} 
      rating={rawData[6].rating}
      id={rawData[6].id}
      amount={rawData[6].amount} />
      <Projuct title={rawData[7].title}
      img={rawData[7].img} 
      price={rawData[7].price} 
      rating={rawData[7].rating}
      id={rawData[7].id}
      amount={rawData[7].amount}  />
      <Projuct title={rawData[8].title}
      img={rawData[8].img} 
      price={rawData[8].price} 
      rating={rawData[8].rating}
      id={rawData[8].id}
      amount={rawData[8].amount}  />
      </div>
      
    </div>
  )
}

export default Home