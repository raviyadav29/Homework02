import React from 'react'
import "./Card.css"

const Card = () => {
    return (
        <div className="container">
            <div id="post">
                <img width={200} height={200} src="https://media.istockphoto.com/id/1312447551/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=AE2Pew-VIYVSmY4wOZcK6bPV2AKgbwSRUVGMnFhyS-Y=" />
            </div>
            <div>
                <h2>Ravi Yadav</h2>
                <p>Am FullStack Trainee At Geekster.</p>
            </div>
            <div className='title'>
                <div>Posts 360</div>
                <div>Followers 240</div>
                <div>Following 250</div>
            </div><br/>
            <div className='button'>
                <div id='btn1'>
                    <button>Follow</button>
                </div>
                <div id='btn2'>
                    <button>Massage</button>
                </div>
            </div>

        </div>
    )
}

export default Card