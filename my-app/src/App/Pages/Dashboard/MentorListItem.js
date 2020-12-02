import React, { Component } from 'react'; //import React Component

export class MentorListItem extends Component {
    render() {
        return (
            <div className='card bg-transparent'>
                <div className='card-body mx-4 p-3'>
                    <h3>{this.props.name}</h3>
                    <img className='mentor-img' src={this.props.image} alt={this.props.name}></img>
                    <p>Age: {this.props.age}</p>
                    <p>Occupation: {this.props.occupation}</p>
                    <p>Company: {this.props.company}</p>
                    <p>Bio: {this.props.bio}</p>
                    <p>Interests: {this.props.interests}</p>
                </div>
            </div>
        );
    }
}