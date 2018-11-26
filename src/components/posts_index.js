import React ,{ Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/index';


 class PostsIndex extends Component {
    componentDidMount () {
        this.props.fetchPosts();
    }

    handleClick (id){
        this.props.history.push(`/posts/${id}`)
    }
    renderPosts () {
       return   _.map(this.props.posts , item => {
            return (
                <li className ='list-group-item' key ={item.id}>
                <Link to ={`posts/${item.id}`} >
                {item.title}
                </Link> 
                </li>
            );
        })
    }

    render(){
        return <div>
            <div className ='text-xs-right'>
            <Link className ='btn btn-primary' to ='/posts/new'> Add Post
            </Link>
            </div>
            <h3>Posts Index Page</h3>
            <ul className ='list-group'>
            {this.renderPosts()}
            </ul>


        </div>
    }
}

function mapStateToProps (state) {
    return  {
        posts:state.posts
    }
}


export default connect(mapStateToProps,{fetchPosts})(PostsIndex)
