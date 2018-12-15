import React, {Component} from 'react';
import DatePicker from 'react-datepicker';


class Datepicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    changeDate = date => {
        this.props.setFormDataState({
            'date': date.toLocaleString()
        });
    };

    render() {
        return (
            <DatePicker
                className='rounded'
                selected={this.state.startDate}
                onSelect={this.handleChange}
                onChange={this.changeDate}
                showTimeSelect
                name='date'
                dateFormat="MM/dd/YYYY"
            />
        );
    }
}

export default Datepicker;