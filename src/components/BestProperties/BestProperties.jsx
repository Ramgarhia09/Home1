import React from 'react'

import './BestProperties.css'


const BestProperties = () => {
  return (
    <div class="BestProp">
<h2>Best Properties</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div class="property-layout">
  {/* <!-- Left Side --> */}
  <div class="left-column">
    {/* <!-- Top Left Large Card --> */}
    <div class="top-left-card">
      
      <img src="new1.png" alt="Top Left" />

    </div>

    {/* <!-- Bottom Two Small Cards --> */}
    <div class="bottom-left-row">
      <div class="bottom-card small-card-1">
        {/* <!-- <img src="" alt="" /> --> */}
        <p class="text">280+</p>
        <span>Properties</span>
         <span class="text2">Explore our wide variety of properties
to fid your dream home today</span>


      </div>

      <div class="bottom-card small-card-2">
        <img src="b452397dd79f21d383175dd81978fa658d189b03.jpg" alt="Bottom Left 2" />

        <div class="box">
          
            <div class="inner-tri">
              <img src="Vector (3).png" alt=""/>
            </div>
          

        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Side --> */}
  <div class="right-column">
    <img src="e0644fcd9e29f44547287311e630a76b9d3682f8.jpg" alt="Right Main" />

           <div class="sale6">
        <p>FOR SALE</p>


    </div>
       <div class="sale7">
        <p>FEATURED</p>
  </div>

  <p class="text23">Villa One Hyde Park</p>

  <div class="property-location2">
      <img src="Icon.png" alt="Location Icon" />
      <p>2050 Bloomingdale Ave</p>
    </div>
    <div class="Feature">
    <div class="Price">$120,000</div>
    <div class="feature-right">
      <div class="bed1">
        <img src="Icon (1).png" alt="" />
        <span>4</span>
      </div>


      <div class="bath1">
        <img src="Icon (2).png" alt="" />
        <span>4</span>
      </div>
      <div class="bath2">
        <img src="Vector (1).png" alt="" />
        <span>350</span>
      </div>
    </div>
  </div>
</div>
</div>
</div>

  )
}

export default BestProperties
