import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalBody from "./ModalBody.jsx";
import ModalFooter from "./ModalFooter.jsx";
import ModalHeader from "./ModalHeader.jsx";

class Modal extends Component {
    static Header = ModalHeader;
    static Body = ModalBody;
    static Footer = ModalFooter;

    render() {
        const {isOpen, children} = this.props;

        return (
            <div className={`modal ${isOpen ? 'fade show' : ''}`} style={{display: isOpen ? 'block' : 'none'}}
                 role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;