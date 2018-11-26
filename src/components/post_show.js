import React, {Component} from 'react';

import { connect} from 'react-redux'
import {fetchPost ,deletePost} from '../actions/index'
import {Link} from 'react-router-dom';


class PostShow extends Component{

    
    componentDidMount(){
        if(!this.props.post) {
        const {id } =this.props.match.params
        this.props.fetchPost(id);
        }
    }


    onDeleteClick() {
        const {id } =this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/')
        });

    }

    showPost (){
        if(this.props.post){
        return (<div>
           <h3>Title : {this.props.post.title}</h3>
           <h6>Content : {this.props.post.content}</h6>
           <p>Categories : {this.props.post.categories}</p>
        </div>);

        } else {
            return (
                <div>Loading.....</div>
            )
        }
    }

    render() {
        // console.log(this.props.id)
        return(
            <div>
                <Link className ="btn btn-danger" to ='/'>Back</Link>
                <button className ='btn btn-danger pull-xs-right'
                onClick ={this.onDeleteClick.bind(this)}>Delete</button>
                <h3>Post Detail</h3>
                {this.showPost()}
            </div>
        )
    }
}
function mapStateToProps({posts},ownProps) {
    return {post : posts[ownProps.match.params.id]}
}
   

export default connect(mapStateToProps,{fetchPost,deletePost}) (PostShow);