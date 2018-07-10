import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import CatCard from './components/CatCard'
import Footer from './components/Footer'
import Splash from './components/Splash'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      catName: '',
      comment: '',
      imgURL: '',
      rating: 10,
      updateFeed: false
    }
  }

componentDidMount() {
  fetch(catURL)
    .then(response => response.json())
    .then(data =>
      this.setState({
        data: data.cats,
      })
    )
}

componentDidUpdate() {
  fetch(catURL)
    .then(res => res.json())
    .then(data =>
      this.setState({
        data: data.cats
      })
    )
}

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(catURL, {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json"
        }),
        body: JSON.stringify({
          dogName: this.state.catName,
          comment: this.state.comment,
          imgURL: this.state.imgURL,
          rating: this.state.rating
        })
      })
      .then(response => response.json())
      .then(entry => {
        console.log(entry)
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
     console.log('clicked')
     alert("YOU MONSTER")
     let deleteURL = catURL + event.target.name
     fetch(deleteURL, {
       method: "DELETE",
       headers: new Headers({
         "content-type": "application/json"
       })
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
      <div className="App">
     <Header />
      <Create handleChange={this.handleChange} handleSubmit={this.handleSubmit} />   
      <CatCard handleDelete ={this.handleDelete} upVote={this.upVote} data={this.state.data} />
      </div>
    );
    <Footer />
  }
}

export default App;
