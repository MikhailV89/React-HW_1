import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="modal-body">{children}</div>
        );
    }
}

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ModalFooter;