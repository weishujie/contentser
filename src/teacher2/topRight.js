/**
 * Created by Administrator on 2017/3/22 0022.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import Money from '.././compoent/img/xinchou.png'

export default class TopRight extends Component {
    render() {
        return (
            <div className="topRight">
                    <ul>
                        <li>
                            <img src={Money} alt=""/>
                            <span>本教学周期薪酬</span>
                        </li>
                        <li>
                           <span>￥{this.props.students[this.props.index].score}</span>
                        </li>
                    </ul>
                </div>
        )
    }
}