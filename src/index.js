import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text : ''
        }
    }

    static propTypes = {
        btnText: React.PropTypes.string.isRequired,
        h1text: React.PropTypes.string.isRequired,
        newArray: React.PropTypes.array.isRequired
    };

    static defaultProps = {
      btnText : 'default props text'
    };

    btnOnClick(event) {
        console.log('Button clicked!', event.target);
    };

    inputOnChange(event){
        console.log('Event', event.target.value);
        this.setState({text : event.target.value});
    }

    render() {
        console.log('array',this.props.newArray);
        return (
            <div style={{backgroundColor: 'red '}} className='test'>
                <h1>Hello</h1>
                <h1>{this.props.h1text}</h1>
                <h3>It's really working!</h3>
                <button onClick={this.btnOnClick}>{this.props.btnText }</button>
                <input type='text' value={this.state.text} onChange={this.inputOnChange.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App h1text="This is h1 text" newArray = {  [1,2,3] }/>,
    document.getElementById('app')
);