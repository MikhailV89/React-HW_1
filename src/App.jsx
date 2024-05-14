import {Component} from "react";
import Modal from "./components/Modal";

class App extends Component {
    state = { modal: false };

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        const {modal} = this.state;
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={modal} toggle={this.toggle}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default App
