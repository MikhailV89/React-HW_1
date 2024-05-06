import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import cn from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
        }
    }

    isShown = () => {
        this.setState(({opened: !this.state.opened}))
    }

    render() {

        const classes = cn(
            'collapse',
            this.state.opened ? 'show' : ''
        )

        const showOrHidden = cn(
            this.state.opened ? 'true' : 'false'
        )


        const {text} = this.props;
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={showOrHidden} onClick={this.isShown}>Link with href</a>
                </p>
                <div className={classes}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    text: 'collapse me',
    opened: true
}


export default Collapse;