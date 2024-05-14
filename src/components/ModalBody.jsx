import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalBody extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="modal-body">{children}</div>
        );
    }
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ModalBody;