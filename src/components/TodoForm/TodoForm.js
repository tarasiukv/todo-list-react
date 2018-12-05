import React from 'react';
import PropTypes from 'prop-types';
import "./TodoForm.css"


import FormInlineMessage from '../FormInlineMessage/FormInlineMessage';

const initialData = {
    _id: new Date().getTime(),
    name: '',
    isCompleted: false
};

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: initialData,
          errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate (data) {
        const errors = {};

        if(!data.name) errors.name = "This field can't be empty";
        if(data.name.length < 5 && data.name.length >= 1) errors.name = "This field should contains at least 5 characters";

        return errors;
    }

    handleSubmit (e) {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if(Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
            this.setState({
                data: initialData
            });
        }
    }

    handleInputChange (e) {
        this.setState({
           data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }


    render() {
        const { data, errors } = this.state;
        return (
               <form
                   className="ui form"
                   onSubmit={this.handleSubmit}
               >
               <div className={errors.name ? "field error" : "field"}>
                   <input
                       type="text"
                       placeholder="Type name of note"
                       name="name"
                       id="name"
                       value={data.name}
                       onChange={this.handleInputChange}
                   />
                   <FormInlineMessage content={errors.name}/>
               </div>
                   <button
                       className="ui basic button fluid"
                       type="submit">
                       <i className="icon plus" />
                       Add item
                   </button>
               </form>
        );
    }
}

TodoForm.propTypes = {
    submit: PropTypes.func
};

export default TodoForm;