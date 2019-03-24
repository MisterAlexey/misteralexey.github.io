import React from 'react';


class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <p>{this.props.first_name} {this.props.last_name}</p>
                <button onClick={this.props.delete_card} id={this.props.id}>Delete every except one </button>
            </div>
        )
    }
}

export default Card;