import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost } from '../actions/index';


class PostNew extends Component {

    renderField(field) {
        const {meta } =field;
        const className = `form-group ${meta.touched&& meta.error?'has-danger':''}`
        return <div className = {className}>
            <label>{field.label}</label>
            <input className='form-control' type='text' {...field.input} />
            <div className ='form-control-feedback'>
            {meta.touched?meta.error:''}
            </div>
        </div>
    }
    onSubmit(values) {
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        })

    }



    render() {

        const { handleSubmit } = this.props
        return (<form  noValidate="" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name='title' label='Title' component={this.renderField} />
            <Field name='categories' label='Categories' component={this.renderField} />
            <Field name='content' label='Content' component={this.renderField} />
            <button type='submit' className='btn btn-primary mr-2'>Submit</button>
            <Link  className='btn btn-danger' to ='/'>Cancel</Link>

        </form>);
    }
}

function validate(values) {
    // console.log(values);
    const errors = {}

    if (!values.title) {
        errors.title = 'Enter a Title!'
    }

    if (!values.categories) {
        errors.categories = 'Enter some Catgories!'
    }

    if (!values.content) {
        errors.content = 'Enter some Content!'
    }
    return errors;

}

export default reduxForm({
    validate,
    form: 'NewPostForm'
})( connect(null , {createPost })
    (PostNew)
    );