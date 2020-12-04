import React, { Component } from 'react'; //import React Component
import { MentorList } from './MentorList.js';


export class MentorContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mentors: []
        };
    }

    componentDidMount() {
        this.setState({mentors: this.props.mentors}); 
    }
    
    filter() {
        let select = document.querySelector('.occupations');
        let occupationSelected = select.options[select.selectedIndex].value;

        select = document.querySelector('.companies');
        let companySelected = select.options[select.selectedIndex].value; 
        
        select = document.querySelector('.interests');
        let interestSelected = select.options[select.selectedIndex].value; 

        let filteredMentors = [];
        this.props.mentors.map((mentor) => {
            let occupation = mentor.occupation; 
            let company = mentor.company; 
            let interests = mentor.interests; 

            let isOccupation = false; 
            if(occupation === occupationSelected || occupationSelected === 'all') {
                isOccupation = true; 
            }

            let isCompany = false; 
            if(company === companySelected || companySelected === 'all') {
                isCompany = true; 
            }

            let isInterest = false; 
            for(let i = 0; i < interests.length; i++) {
                if(interests[i] === interestSelected) {
                    isInterest = true; 
                }
            }
            if(interestSelected === 'all') isInterest = true; 

            if(isOccupation && isCompany && isInterest) {
                filteredMentors.push(mentor);
            }
        });

        this.setState({mentors: filteredMentors});
    }

    render() {
        return (
            <section className='mentor-results'>
                <div className='filter-btn-container'>
                    <button className='filter-btn' onClick={(event) => this.filter(event)}>Filter Mentors</button>
                </div>
                <MentorList mentors={this.state.mentors} />
            </section>
        );
    }
}