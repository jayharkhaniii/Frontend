import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in, quae laboriosam ab voluptatum earum corrupti ducimus quam, porro repellendus vero et, sequi hic amet beatae unde animi? Aliquid qui veniam dolore, expedita aliquam id facilis nam officiis officia animi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero culpa laudantium, distinctio esse saepe rerum ipsa accusamus quidem unde?</p>
      </div>
    </div>
  )
}

export default DescriptionBox
