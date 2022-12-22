const React = require('react')
const Def = require('./default')

function Home() {
    console.log('Hello from the Home Page')
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className='homeImg' src='/images/pablo-pacheco-pizza.jpg' alt='Yummy pizza!' />
                    <div>
                        Photo by <a href="https://unsplash.com/@pablopacheco_videografo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Pacheco</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href='/places'>
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home