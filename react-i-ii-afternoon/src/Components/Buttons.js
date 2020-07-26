import React, {Component} from 'react'

class Buttons extends Component{
    constructor(){
        super();


    }

    render(){
        return(
            <div>
                <button onClick={this.props.buttonPrevious}>Previous</button>
                <button onClick={this.props.buttonNext}>Next</button>
            </div>
        )
    }
}

export default Buttons