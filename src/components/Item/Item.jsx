import {Component} from "react";
import PropTypes from "prop-types";

class Item extends Component {
    render() {
        const { task, onRemove } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
                    </div>
                    <div className="col">{task}</div>
                </div>
                <hr/>
            </div>
        )
    }
}

Item.propTypes = {
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Item;