const React = require('react')
const Def = require('../default')

function Show(data) {
    return (
        <Def>
            <main>
                <div className='grid-container'>
                    <div className='item-place-name'>
                        <h1>{data.place.name}</h1>
                    </div>
                    <div className='item-place-rating'>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </div>
                    <div className='item-place-desc'>
                        <h2>Description</h2>
                        <p> Location in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                    </div>
                    <div className='item-place-buttons'>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    <div className='item-place-img'>
                        <img src={data.place.pic} />
                    </div>
                    <div className='item-place-comments'>
                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show