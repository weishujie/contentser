import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import Del from '.././compoent/img/yuan_11.png'


export default class HistoryJ extends Component {
    render() {
        return (
            <div>
                <div className="histFloat">
                    <span>{this.props.obj.des}</span>
                    <div>
                        <span>{this.props.obj.operate}</span>
                        <span>$</span>
                    </div>
                </div>
            </div>
        )
    }
}