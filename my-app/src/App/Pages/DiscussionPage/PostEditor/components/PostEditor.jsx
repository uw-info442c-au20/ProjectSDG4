import React, { Component } from 'react';
import '../styles/PostEditor.css'

class PostEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPostBody: '',
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(ev) {
        this.setState({
            newPostBody: ev.target.value
        });
    }

    createPost() {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }

    render() {
        return (
            <div className="card card-default post-editor">
                <div className="card-body">
                <div className="d-flex flex-row post-profile">
                        <div className='p-2'>
                            <img className="rounded-circle profile-pic" src={`${process.env.PUBLIC_URL}/profile-pic.png`} alt='Alex Albon profile photo'/>
                        </div>
                    <div className='p-2'> 
                        <h5>Alex Albon</h5>
                    </div>
                </div>
                    <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
                    <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                </div>
            </div>
        )
    }
}

export default PostEditor;