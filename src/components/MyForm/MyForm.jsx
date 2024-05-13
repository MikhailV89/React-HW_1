import { Component } from 'react';
import { cloneDeep } from "lodash";
import { Form, Button } from 'react-bootstrap';
import Input from "../UI-Input/index.js";
import PropTypes from "prop-types";


const formInitialValues = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: 'China',
    rules: 'off'
}


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData ? {...props.formData} : {...formInitialValues}
        }
    }


    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData)

        if(event.target.name === 'rules') {
            if(previousState[event.target.name] === 'on') {
                previousState[event.target.name] = 'off'
            } else {
                previousState[event.target.name] = 'on'
            }
        } else {
            previousState[event.target.name] = event.target.value
        }

        this.setState({formData: previousState});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.formData )
        this.setState({formData: {...formInitialValues} })

    }

    render() {
        const {email, password, address, city, country, rules} = this.state.formData
        return (
            <Form onSubmit={this.handleSubmit}>
                <h4 className='text-center'>Form</h4>

                <Input
                    label='Email address'
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                />

                <Input
                    label='Password'
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                />

                <Input
                    label='Address'
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    as='textarea'
                />

                <Input
                    label='City'
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                />

                <Form.Select
                    name='country'
                    onChange={this.handleChange}
                    className="mb-3"
                    aria-label="Default select example"
                    value={country}
                >
                    <option>Open this select menu</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="China">China</option>
                </Form.Select>

                <Form.Check
                    className="mb-3"
                    type="switch"
                    label="disabled switch"
                    id="disabled-custom-switch"
                    name='rules'
                    onChange={this.handleChange}
                />

                <Button type='submit'>Submit form</Button>

            </Form>
        )
    }

}

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object
}

export default MyForm;