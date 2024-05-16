import { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logList: []
        };
    }

    buttonPlus = () => {
        const { logList } = this.state;
        const newLogList = [logList.length ? logList[0] + 1 : 1, ...logList];
        this.setState({ logList: newLogList });
    };

    buttonMinus = () => {
        const { logList } = this.state;
        const newLogList = [logList.length ? logList[0] - 1 : -1, ...logList];
        this.setState({ logList: newLogList });
    };

    deleteBtn = (index) => {
        const { logList } = this.state;
        const newLogList = [...logList];
        newLogList.splice(index, 1);
        this.setState({ logList: newLogList });
    };

    render() {
        const { logList } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.buttonPlus}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.buttonMinus}>-</button>
                </div>
                <div className="list-group">
                    {logList.map((value, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.deleteBtn(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}


List.propTypes = {
    logList: PropTypes.array
};
export default List;