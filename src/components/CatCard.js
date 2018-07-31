import React, {Component} from 'react';
import {Card, Image} from 'semantic-ui-react'


class CatCard extends Component {

    render() {
        console.log ('CARDPROPS', this.props)
        var cats = this.props.data.map(cat => {
            return ( 
            <Card key={cat.id}>
                <Card.Content>
                <img src={cat.imgUrl} /> 
                    <Card.Header> 
                        {cat.catName} 
                    </Card.Header> 
                    <Card.Description> 
                        {cat.comment} 
                     </Card.Description> 
                </Card.Content> 
                <Card.Content extra>
                <div className='upVote'>
                <p>{cat.rating}/10</p>
                    <button value={cat.rating} name={cat.id} onClick={this.props.upVote}>&uarr; vote</button> 
                </div> 
                    <button name={cat.id} onClick={this.props.handleDelete}>Delete</button> 
                </Card.Content> 
            </Card>
            )
            })

            return ( 
                <div className='catContainer'> 
                    {cats} 
                </div>
        )
    }
}


export default CatCard;