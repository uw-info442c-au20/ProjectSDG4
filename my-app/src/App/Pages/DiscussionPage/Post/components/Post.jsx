import React from 'react';
import '../styles/Post.css'



const Post = (props) => (
    <div>
        <div className="card card-default post-body">
            <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={`${process.env.PUBLIC_URL}/profile-pic.png`} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h5>Alex Albon</h5>
                    </div>
                </div>
            <div>
                <div className="card-body">
                    { props.postBody }
                </div>
            </div>
        </div>
    </div>

);

export default Post;