import React, {Component} from 'react';
import Datepicker from "./DatePicker";


class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            task: ''

        };
        this.state = this.initialState;
    }

    handleTaskTitleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    formDataSetState = object => {
        this.setState(object);
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        console.log(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { task } = this.state;

        return (
            <form>
                <div className="row">
                    <div className='col-3'>
                        <input
                            className='form-control'
                            type='text'
                            name='task'
                            value={task}
                            onChange={this.handleTaskTitleChange}
                            required="required"
                        />
                    </div>
                    <div className='col-6'>
                        <Datepicker setFormDataState={this.formDataSetState} />
                    </div>
                    <div className='col-3'>
                        <input className="btn btn-primary mb-2"
                                type='button'
                                value='Submit'
                                onClick={this.submitForm} />
                    </div>
                </div>

            </form>
        );
    }
}

export default Form;