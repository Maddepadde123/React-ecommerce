import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>Bla bla bla bla bla</p>
                <p>
                    blaaaaa bla blaaaaaaa
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox