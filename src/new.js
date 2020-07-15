import React, {Component} from 'react'

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h3 style={{background : 'yellow'}}>New Component {this.props.text}</h3>
            </div>
        );
    };
}

