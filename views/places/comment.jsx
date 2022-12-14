const React = require('react')
const Def = require('../default')

function Comment(place) {
    return (
        <Def>
            <main>
                <h2 className='comment-header'>New Comment for {place.name}</h2>
                <form method='POST' action={ `/places/${place._id}/rant` }>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' id='author' name='author' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Is this a Rant?&nbsp;&nbsp;</label>
                        <input type="checkbox" id='rant' name='rant' defaultChecked/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars'>Star Rating</label>
                        <input type='number' step='0.5' className='form-control' id='stars' name='stars' min='0' max='5' defaultValue={2.5} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Comment:</label>
                        <input type='text' className='form-control' id='content' name='content' />
                    </div>
                    <input type='submit' className='btn btn-primary' value='Add Rant' />
                </form>
            </main>
        </Def>
    )
}

module.exports = Comment