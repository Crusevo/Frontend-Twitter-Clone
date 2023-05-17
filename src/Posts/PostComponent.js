import React from "react";
import PostService from "./PostService";
import './PostComponent.css';


class PostComponent extends React.Component{


    constructor(props){
        super(props)

        this.state = {


            posts: []

        }

    }

    componentDidMount(){

        PostService.getPosts().then((response)=>{
            this.setState({posts: response.data})
        });

    }

    render(){

        return(

            <div>

                <table className="postTable">

                    <tbody>
                        {
                            this.state.posts.map(
                                post=>
                                <tr key = {post.postId}>



                                    <p id="postTable_userName">{post.userName}</p>
                                    <p id="upostTable_userImage"><img id="profileImage" src={post.image} width={40} height={40} alt='Profile Image'></img></p>
                                    
                                    <p id="postTable_postTitle">{post.postTitle}</p>

                                    <p id="postTable_postContent">{post.postContent}</p>

                                    <p id="postTable_postLike">Like {post.likes}</p>
                                    <p id="postTable_separator"></p>
                             
                                </tr>

  
                            )
    
                        }

        

               </tbody>

                </table>

       
                

            </div>


        )


    }


}

export default PostComponent;