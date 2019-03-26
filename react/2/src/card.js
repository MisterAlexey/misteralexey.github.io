import React from 'react';


class Card extends React.Component{
    render(){
        return(
            <div className="card">
            <ul>
                <li>
                    {this.props.first_name} {this.props.last_name}
                </li>
            </ul>
                
                
            </div>
        )
    }
}

export default Card;