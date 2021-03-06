import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentPrompt from '../components/CommentPrompt'
import PostLike from '../components/PostLike'
import DestroyPost from '../components/DestroyPost'
import DestroyComment from "../components/DestroyComment";

class ShowPost extends Component {

    state = {
        post: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let post_id = this.props.match.params.id;
        fetch('/api/v1/posts/' + post_id)
            .then(post => post.json())
            .then(post => {
                this.setState({
                    post: [post]
                })
            });
    }

    renderPost = () => {
        console.log(this.state.post);
        return this.state.post.map(post => {
            return (
                <div key={post.id}>
                    <div className="post-container">

                        <div className="post-box">

                            <h5>
                                <div className="orange-info">By: {post.user.username} </div>
                                At: {post.time}
                            </h5>

                            <h4>
                                <div className="bold-title"> {post.title} </div>
                            </h4>

                            <br/>
                            {post.content}
                            <br/>
                            <br/>

                            <div className="options-container">
                                <div className="post-options">
                                    <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1577651882/UserFluent/views_u3muat.png'} alt={'views'}/>
                                    {post.views}
                                </div>
                                <div className="post-options">
                                    <PostLike post_id={post.id} likes={post.likes} liked={post.liked}/>
                                </div>
                                <div className="post-options">
                                    <DestroyPost post_id={post.id} owner={post.owner} history={this.props.history}/>
                                </div>
                            </div>


                        </div>

                        <CommentPrompt post_id={post.id}/>
                        {this.renderComments(post)}

                    </div>

                </div>
            )
        })
    };

    renderComments = (post) => {
        return post.comments.map(comment => {
            return (
                <div key={comment.id}>

                    <div className="comment-box">
                        <div className="orange-info">By: {comment.user_name}</div>
                        <br/>
                        {comment.content}
                        <br/>
                        <DestroyComment session_user_id={post.session_user_id} owner_id={comment.user_id} comment_id={comment.id} history={this.props.history}/>
                    </div>

                </div>
            )
        })
    };

    render() {
        return (
            <div>
                <h2>
                    (ShowPost Component)
                </h2>

                {this.renderPost()}

            </div>
        )
    }

}

export default ShowPost