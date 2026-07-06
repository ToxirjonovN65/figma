import React from 'react'
import './Carsds.css'

const Cards = () => {
  return (
    <div>

    <div className="cards">
        <div className="top_texts">
            <h1>What we do</h1>
            <h3>The areas that we're specialized in.</h3>
        </div>
        <div className="bottom_cards">
            <div className="card_1">
              <h4>Product Photography</h4>
              <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
              <button className='b_1'><a href="#">Read more</a></button>
            </div>
            <div className="card_2">
              <h4>Architecture Photography</h4>
              <p>Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.</p>
              <button className='b_1'><a href="#">Read more</a></button>
            </div>
            <div className="card_3">
              <h4>Drone Photography</h4>
              <p>Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
              <button className='b_1'><a href="#">Read more</a></button>
            </div>
            <div className="card_4">
              <h4>Wildlife Photography</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</p>
              <button className='b_1'><a href="#">Read more</a></button>
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default Cards