import React, { Component } from 'react'; //import React Component
import { MentorListItem } from './MentorListItem.js';

export class MentorList extends Component {
    render() {
        let mentorInfo = this.props.mentors.map((mentor) => {


            return <MentorListItem name={mentor.name} image={mentor.photo} age={mentor.age} occupation={mentor.occupation} company={mentor.company} bio={mentor.bio} interests={mentor.interests.join(', ')} key={mentor.name}/>
        });

        return (
            <section className='mentor-results'>
                {mentorInfo}
            </section>
        );
    }
}