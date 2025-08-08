import React from 'react'
import './Add-property.css'; // regular CSS

const AddPropertyForm = () => {
  return (
    <div>
      <h2 className="heading">List your property</h2>

      <div className='btn'>
        <div className='info'>
          <p className='basic-info'>Basic Info</p>
        </div>
        <div className='photos'>
          <p className='photos-btn'>Photos</p>
        </div>
      </div>

      <div className="container">
        <form className="form">
          <div>
            <label className="label">Floor Name</label>
            <input type="text" className="input" />
            <p className="input-info">Example:Ground Floor</p>
          </div>

          <div>
            <label className="label">Description</label>
            <textarea className="input" />
           
          </div>

          <div>
            <label className="label">Floor Price <span className="text-gray">(Only digits)</span></label>
            <input type="number" className="input" />
            <p className="input-info">Example:4000</p>
          </div>

          <div>
            <label className="label">Price Postfix</label>
            <input type="text" className="input" />
            <p className="input-info">Example:Per Month or Per Night</p>
          </div>

          <div>
            <label className="label">Floor Size <span className="text-gray">(Only digits)</span></label>
            <input type="number" className="input" />
            <p className="input-info">Example:5000</p>
          </div>

          <div>
            <label className="label">Size Postfix</label>
            <input type="text" className="input" />
            <p className="input-info">Example: "sq ft", "sq m".</p>
          </div>

          <div>
            <label className="label">Bedrooms</label>
            <input type="number" className="input" />
            <p className="input-info">Example:4</p>
          </div>

          <div>
            <label className="label">Bathrooms</label>
            <input type="number" className="input" />
            <p className="input-info">Example:2</p>
          </div>

          <div>
            <label className="label">Floor Plan Image</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input type="text" className="input" style={{ flex: 1 }} />
              <button type="button" className="button-secondary">Select</button>
            </div>
            <p className="image-info">The recommended minimum width is 770px and height is flexible.</p>
            <p className="input-info">Upload a floor plan image</p>
          </div>

          <div>
            <button type="button" className="button">+ Add more</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPropertyForm
