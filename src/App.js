import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import CatCard from './components/CatCard'
import Footer from './components/Footer'
import Splash from './components/Splash'

const catURL = "https://kitties-server-side.herokuapp.com/api/v1/kittie"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      catName: '',
      comment: '',
      imgURL: '',
      rating: 10,
      isDataLoaded: false
    }
  }

  componentDidMount() {
    this.getAllCats()
  }

  componentDidUpdate() {

  }

  getAllCats = () => {
    fetch(catURL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isDataLoaded: true
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var cat = {
          imgUrl: this.state.imgURL,
          catName: this.state.catName,
          comment: this.state.comment,
          rating: this.state.rating
        }
    fetch(catURL, {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json"
        }),
        body: JSON.stringify(cat)
      })
      .then(response => response.json())
      .then(entry => {
        this.getAllCats()
      })
      .then(
        document.getElementById('form').reset()
      )
  }

   handleChange = (event) => {
     const value = event.target.value
     const key = event.target.name
     this.setState({
       [key]: value
     })
   }

   handleDelete = (event) => {
     event.preventDefault()
     let deleteURL = catURL + '/' + event.target.name
     console.log(deleteURL)
     fetch(deleteURL, {
       method: "DELETE",
       headers: new Headers({
         "content-type": "application/json"
       })
     }).then(response => response.json())
       .then(entry => {
         this.getAllCats()
       })
   }

    upVote = (event) => {
      console.log(event.target.value)
      let newRating = event.target.value++
        event.preventDefault()
      let updateURL = catURL + event.target.name
      fetch(updateURL, {
        method: "PUT",
        headers: new Headers({
          "content-type": "application/json"
        }),
        body: JSON.stringify({
          rating: newRating
        })
      })
    }

  render() {
    return (
      <Router>
        <React.Fragment>
        <Route className="header" path="/" component={Header} />
        <Create handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Splash} />
        {/* {this.state.isDataLoaded && <Route path="/catCard" component={CatCard}/>} */}
        <Route path="/catCard" component={() => <CatCard handleDelete ={this.handleDelete} upVote={this.upVote} data={this.state.data} />} />
      </Switch>
      <Footer />
      </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
