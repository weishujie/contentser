import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import Money1 from '.././compoent/img/xinchou.png'

export default class HistoryBanner extends Component {
    render() {
        return (
            <div className="historyBanner">
                <span>
                    <img src={Money1} alt=""/>
                    历史平均薪资
                </span>
                <span className="hisspan">￥{this.props.students[this.props.index].init}</span>
            </div>
        )
    }
}