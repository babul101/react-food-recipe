import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {handleChange,handleSubmit,search} = this.props;
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
                        <h1 className='text-slanted text-capitalize'>
                            Search Recipes with {' '}
                            <strong className='text-orange'>FoodRecipe</strong>
                        </h1>
                        <form className='mt-4'>
                            <label htmlFor="search" className='text-capitalize'>
                                Items seperated by commas
                            </label>
                            <div className="input-group">
                                <input type="text" name='search'
                                 className='form-control form-control-lg'
                                 placeholder='potato,chilly,ginger' value={search} onChange={handleChange}  />
                                 <div className="input-group-append">
                                     <button type='submit' className='input-group-text bg-orange text-white' onClick={handleSubmit}>
                                        <i className='fas fa-search'></i>
                                     </button>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Search;