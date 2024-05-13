import React from "react";
import {Form} from "react-bootstrap";
import {random} from "lodash";
import {value} from "lodash/seq.js";
import PropTypes from "prop-types";

const Input = ({label = null,
                   name ='',
                   type = 'text',
                   placeholder = 'Put your data here',
                   value = '',
                   onChange = (e) => {
                       console.log(e.target,value)
                   },
                   ...restProps}) => {
console.log(restProps)
    const controlId = 'form-input-' + random(0, 100);
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            { label && <Form.Label>{label}</Form.Label> }
            <Form.Control
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onChange={onChange}
                {...restProps}
            />
        </Form.Group>
    )
};


Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
}
export default Input;