import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class page3 extends Component {
    constructor(){
        super();
        this.state = {
            characters: []
        }
    }


    componentDidMount(){
        axios.get('https://www.breakingbadapi.com/api/characters/').then(response=> {
            this.setState({characters: response.data})            
        })
    }

    render() {
        const map = this.state.characters.map((e, i) => {
            return <div key={i}>
                <p>{e.name}</p>
            </div>
        })

        return (
            <div>
                <h1>Page 3</h1>
                {map}
                <div>
                    <Link to='/'> Home</Link>
                </div>
            </div>
        );
    }
}

export default page3;