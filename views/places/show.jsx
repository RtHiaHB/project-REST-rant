const React = require('react')
const Def = require('../default')

function Show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author} </stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='grid-container'>
                    <div className='item-place-name'>
                        <h1>{data.place.name}</h1>
                    </div>
                    <div className='item-place-img'>
                        <img src={data.place.pic} className='item-place-img-img' />
                    </div>
                    <div className='item-place-desc'>
                        <h2>Description</h2>
                        <h3> {data.place.showEstablished()}</h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                    <div className='item-place-rating'>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </div>
                    <div className='item-place-buttons'>
                        <a href={`/places/${data.place._id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.place._id}?_method=DELETE`}>
                            <button type="submit" className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    <div className='item-place-comments'>
                        <h2>Comments</h2>
                        {comments}
                        <a href={`/places/${data.place._id}/rant`} className='btn btn-danger'>Add a Rant</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show