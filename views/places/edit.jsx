const React = require('react')
const Def = require('../default.jsx')

function Edit_Form(data) {
    let id = String(data.place._id)
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name </label>
                        <input className='form-control' id='name' name='name' defaultValue={data.place.name} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture </label>
                        <input className='form-control' id='pic' name='pic' defaultValue={data.place.pic}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>Place City</label>
                        <input className='form-control' id='city' name='city' defaultValue={data.place.city} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Place State</label>
                        <input className='form-control' id='state' name='state' defaultValue={data.place.state} />
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='founded'>Founded</label>
                        <input className='form-control'
                            id='founded'
                            name='founded'
                            value={data.place.founded} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id='cuisines' name='cuisines' defaultValue={data.place.cuisines} required/>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Edit Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit_Form