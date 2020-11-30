import React, { Component } from 'react'; //import React Component
import { DiscussionBody } from './DiscussionBody.js';
import { DiscussionComment } from './DiscussionComment.js';

export class Discussion extends Component {
    render() {
        return (
            <section>
                <DiscussionBody>
                    <DiscussionComment /> 
                </DiscussionBody>
            </section>
        );
    }
}
