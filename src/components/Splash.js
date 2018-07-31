import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Splash extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <h1 className="subtitle">Show Me Your Kitties!</h1>
                    <p className="description">Welcome to Show Me Your Kitties! The app where you can view, add images and comments of fabulous felines! 
                       You can even upvote your favorites! Also, Please consider donating to our local feline rescue! 
                    </p>
                    <Link className="goto" to="/CatCard"> 
                    < button className="enter">MEOW!</button>
                    </Link>
                </section> 
            </div>
        );
    }
}

export default Splash;