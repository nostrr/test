import React,{Component} from 'react'

export default class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {title: 'RussTime', author: 'Jon Smit'},
                {title: 'UA', author: 'Sergey Zelensky'},
                {title: 'GBT', author: 'Weyn Runy'}
            ]
        }
    }

    renderItems(item, index){
        return(
            <li key={index}> Magazine : {item.title}, Author : {item.author}</li>
        );
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.news.map(this.renderItems.bind(this))}
                </ul>
            </div>
        );
    }
}

export var Alex = 'Lukavnev';

