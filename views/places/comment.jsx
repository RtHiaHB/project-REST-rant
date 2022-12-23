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
                        <input type='range' className='slider-main' step='0.5' id='stars' name='stars' min='0' max='5' value={2.5} />
                        <table width="100%" className='slider-table'>
                            <tr>
                                <td className='slider-0'>0</td>
                                <td className='slider-1'>0.5</td>
                                <td className='slider-2'>1.0</td>
                                <td className='slider-2'>1.5</td>
                                <td className='slider-2'>2.0</td>
                                <td className='slider-2'>2.5</td>
                                <td className='slider-2'>3.0</td>
                                <td className='slider-2'>3.5</td>
                                <td className='slider-2'>4.0</td>
                                <td className='slider-2'>4.5</td>
                                <td className='slider-2'>5.0</td>
                            </tr>
                        </table>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Comment:</label>
                        <textarea  className='form-control' id='content' name='content' />
                    </div>
                    <input type='submit' className='btn btn-primary' value='Add Rant' />
                </form>
            </main>
        </Def>
    )
}

module.exports = Comment