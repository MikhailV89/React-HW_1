 import React from "react";
import Body from "./Body.jsx";
 import Title from "./Title.jsx";
 import Text from "./Text.jsx";
 import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
 import cn from 'classnames';


class Card extends React.Component {

    static Body = Body
    static Title = Title
    static Text = Text

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return <div className="card"> { children } </div>
    }
}
 export default Card