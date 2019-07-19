import React, { Component } from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom';

class Default extends Component {
    render() {
        return (
           <Header title='404'>
                <h2 className='text-light text-uppercase'>
                    page doesn't exist
                </h2>
                <Link to='/' className='text-uppercase btn btn-secondary btn-large mt-3'>
                    Back home
                </Link>
           </Header>
        )
    }
}

export default Default;