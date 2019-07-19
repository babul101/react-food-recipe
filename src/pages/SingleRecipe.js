import React, { Component } from 'react'
// import {recipeData} from '../data/tempDetails';
import {Link} from 'react-router-dom';

class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            // recipe:recipeData,
            recipe:{},
            id,
            loading:true
            
        }
    }

    async componentDidMount() {
        const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`
        try {
            const response = await fetch(url);
            // console.log(response)
            const responseData = await response.json();
            // console.log(responseData)
            this.setState({
                recipe:responseData.recipe,
                loading:false
            })
        } catch (error) {
            console.log(error)
        }
    }
   

    render() {
        const {image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe
        if(this.state.loading){
            return (
                <div className="container">
                    <div className="row">
                        <div className='col-10 mx-auto col-md-6 my-3'>
                             <h2 className='text-capitalize text-orange text-center'>
                                 Loading recipe
                             </h2>
                        </div>
                    </div>
                </div>
             )
        }
        return (
            <div className='container my-5'>
                <div className="row">
                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <Link to='/recipes' className='btn btn-warning bg-orange text-white mb-5 text-capitalize'>
                            back to recipes list
                        </Link>
                        <img src={image_url} alt="recipe" className='d-block w-100' style={{maxHeight:'30rem'}} />
                    </div>
                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <h6 className='text-uppercase'>{title}</h6>
                        <h6 className='text-warning text-orange text-capitalize text-slanted'>
                            provided by {publisher}
                        </h6>
                        <a href={publisher_url} target='_blank' className='btn btn-primary bg-orange mx-2 mt-2 text-capitalize' rel='noopener noreferrer'>
                            publisher webpage
                        </a>
                        <a href={source_url} target='_blank' className='btn btn-primary bg-orange mx-2 mt-2 text-capitalize' rel='noopener noreferrer'>
                            recipe url
                        </a>
                        <ul className='list-group mt-4'>
                            <h2 className='mt-3 mb-4'>Ingredients</h2>
                            {ingredients.map((item,index)=> {
                                return(
                                    <li className='list-group-item text-slanted' style={{fontWeight:'bold'}} key={index}>
                                        {item}
                                    </li>
                                )                
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
       
    }
}

export default SingleRecipe;