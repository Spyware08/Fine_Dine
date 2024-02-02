import "../hero.css"

export default function Hero_component() {
    return (
        <div>
            <div className='d-flex justify-content-around p-5 hero_main'>
                <div className="hero_first">
                    <h3>The Key to Fine Dinning</h3> <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quis necessitatibus distinctio numquam debitis, in ex pariatur blanditiis deserunt fugiat odit nulla ullam fugit non nihil error ducimus voluptates velit.</p> <br />
                    <button>Explore More</button>
                </div>
                <div className="hero_sec">
                    <img src="https://cdn.pixabay.com/photo/2017/08/06/08/19/food-2590224_1280.jpg" alt="Hero_img" />
                </div>
                
            </div>

        </div>
    )
}
