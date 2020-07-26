import React, {Component} from 'react'


class Main extends Component {
    constructor(){
        super();
    }
      
    render(){
        // const {id, name, city, country, employer, title, favoriteMovies} = this.state;
        const {id, name, city, country, employer, title, favoriteMovies} = this.props.person
        return(
            <div className="Main">
                <h1 className="id">{id}/25</h1>
                <h1><u>{name.first} {name.last}</u></h1>
                <div className="Info">
                    <p1><b>From: </b>{city}, {country}</p1>
                    <p1><b>Job Title: </b>{title}</p1>
                    <p1><b>Employer: </b>{employer}</p1>  
                </div>
                <p1><b>Favorite Movies: </b></p1>
                <ol>{favoriteMovies.map((e) => {
                    return <li>{e}</li>
                })}</ol>
                {/* <h1>{this.props.person.id}</h1> 
                <h2>{this.props.person.name}</h2>
                <h2>{this.props.person.city}</h2>
                <h2>{this.props.person.country}</h2>
                <h2>From: {this.props.person.city}, {this.props.person.country}</h2>
                <h2></h2> */}
            </div>
        )
    }
}

export default Main