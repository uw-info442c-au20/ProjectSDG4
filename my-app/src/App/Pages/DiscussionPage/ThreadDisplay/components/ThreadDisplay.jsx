import React from 'react';
import { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor'
import '../styles/ThreadDisplay.css';
import ProfilePic from './chancelol.png';
import Sam from './sam.PNG';
import Wakataka from './wakataka.PNG';
import Kayvon from './kayvonsmaller.PNG';

class ThreadDisplay extends Component {
    constructor(props) {
        super(props);
           
        this.addPost = this.addPost.bind(this);
        
        this.state = {
            posts: [],
        }
    }


    addPost(newPostBody) {
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
    }


    render() {
        return (
        <section>
            <div className="card card-default main-post">
                <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={ProfilePic} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h4>Chancelor Bennett</h4>
                    </div>
                </div>
                <h1 className='post-title'>Did you know about these exciting opportunities?</h1>
                <div className="card-body">
                    <p>     The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>

                    <p>     Lectus a viverra pharetra, leo lorem sollicitudin justo,
                    sit amet ullamcorper ante quam ut risus. Cras mauris tortor, dignissim at neque eu,
                    vehicula aliquam massa. Proin at faucibus dolor. Quisque semper felis sit amet dictum
                    consequat.</p>
                </div>
            </div>
            <div>
        <div className="card card-default post-body">
            <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={Sam} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h5>Samantha Smith</h5>
                    </div>
                </div>
            <div>
                <div className="card-body">
                Alexander Rae Baldwin III is an American actor, writer, producer, comedian, and political activist. A member of the Baldwin family, he is the eldest of the four Baldwin brothers, all actors. Baldwin first gained recognition appearing on seasons six and seven of the CBS television drama Knots Landing.
                </div>
            </div>
        </div>
        <div className="card card-default post-body">
            <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={Wakataka} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h5>Waka Taka</h5>
                    </div>
                </div>
            <div>
                <div className="card-body">
                What I think people who are not in the Greek System need to understand is that partying isn't just something we do. It's ingrained into our lives. Many people, these days, are perfectly content with sitting on their computers all day playing video games. I used to be a competitive gamer and I used to do this. After joining the Greek system, partying became a new norm that was ingrained into my life. We need it for our wellbeing. It helps us escape society. There have even been studies that show how necessary gatherings are for our wellbeing. The fact that it was stripped away from us, especially by something that barely affects us specifically is very detrimental to our mental state. People are giving us so much crap for it, yet they don't know what it's like for us to be deprived of everything that's fun for us.                </div>
            </div>
        </div>
    </div>
            {
                this.state.posts.map((postBody, idx) => {
                    return (
                        <Post key={idx} postBody={postBody}/>
                    )
                    })
            }
            <PostEditor addPost={this.addPost} />
            <div className="card card-default main-post">
                <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={Kayvon} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h4>Adam Kaufman</h4>
                    </div>
                </div>
                <h1 className='post-title'>How I went from hating math to working at NASA</h1>
                <div className="card-body">
                    <p>     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor massa
                    lacinia ipsum ultricies tempus. Duis blandit ullamcorper tincidunt. Nam in lacus
                    ut purus bibendum auctor vel vitae augue. Aenean ullamcorper diam dignissim accumsan
                    viverra. Ut efficitur elementum molestie. Aenean sed consectetur erat, sit amet
                    condimentum elit. Duis sem tellus, posuere ut tincidunt eu, vulputate quis lacus.
                    Aliquam magna turpis, ullamcorper congue mauris nec, ultrices ornare ex. Cras sem est,
                    interdum in ipsum quis, congue vulputate enim. Pellentesque et elit magna.
                    Pellentesque malesuada, quam nec porttitor malesuada, ipsum neque condimentum ante,
                    ac mollis eros magna sed ligula. Suspendisse orci orci, pellentesque placerat odio nec,
                    fringilla consectetur erat. Donec sagittis quam tortor, ut eleifend eros cursus non.
                    Pellentesque id vulputate risus, non volutpat velit. Fusce id finibus sem.
                    Vestibulum et mauris tincidunt, suscipit augue et, iaculis erat. </p>

                    <p>     Duis id diam vel sem hendrerit rutrum vitae vitae urna. Nam euismod
                    eu sapien ut malesuada. Donec sed dapibus orci, et fermentum justo.
                    Nunc aliquet condimentum quam, a gravida felis iaculis a. Aliquam sed ullamcorper mi,
                    id auctor leo. Nunc pretium, lectus a viverra pharetra, leo lorem sollicitudin justo,
                    sit amet ullamcorper ante quam ut risus. Cras mauris tortor, dignissim at neque eu,
                    vehicula aliquam massa. Proin at faucibus dolor. Quisque semper felis sit amet dictum
                    consequat.</p>
                </div>
            </div>
            <div>
        <div className="card card-default post-body">
            <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={Sam} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h5>Samantha Smith</h5>
                    </div>
                </div>
            <div>
                <div className="card-body">
                    This is some interesting stuff!
                </div>
            </div>
        </div>
        <div className="card card-default post-body">
            <div className="d-flex flex-row post-profile">
                    <div className='p-2'>
                        <img className="rounded-circle profile-pic" src={Wakataka} alt='profile'/>
                    </div>
                    <div className='p-2'> 
                        <h5>Waka Taka</h5>
                    </div>
                </div>
            <div>
                <div className="card-body">
                    Where could we go to find out more?
                </div>
            </div>
        </div>
    </div>
            {
                this.state.posts.map((postBody, idx) => {
                    return (
                        <Post key={idx} postBody={postBody}/>
                    )
                    })
            }
            <PostEditor addPost={this.addPost} />
            </section>
        )
    }
    
}

export default ThreadDisplay;