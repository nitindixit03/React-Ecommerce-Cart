import React from 'react'
import './Description.css'


function Description() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is a digital platform that enables businesses to sell products or services online, offering users a convenient shopping experience. It typically includes features like product catalogs, secure payment gateways, user accounts, and order tracking, making it easy for customers to browse, purchase, and manage their orders.</p>
        <p>
          E-commerce websites typically display products or services along with detailed descriptions,images,prices,and any available variations (e.g,sizes,colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default Description
