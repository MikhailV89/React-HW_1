import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            primary: false,
            active: false
        };
    }

    onChangeClass = () => {
        this.setState( ({primary}) => ({primary: !primary, active: primary}));
    }

    render() {
        const btnLeft = cn(
            'btn',
            this.state.primary ? 'btn-primary' : 'btn-secondary'
        )

        const btnRight = cn(
            'btn',
            this.state.active ? 'btn-primary' : 'btn-secondary'
        )

        return(
            <div className="btn-group" role="group">
                <button type="button" className={btnLeft} onClick={this.onChangeClass}>Left</button>
                <button type="button" className={btnRight} onClick={this.onChangeClass}>Right</button>
            </div>
        )
    }

}


export default BtnGroup