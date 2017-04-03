/**
 * Created by Administrator on 2017/3/22 0022.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';

export default class TopLeft extends Component {
    render() {
        return (
            <div className="topLeft">
                <div className="mingpian">
                    <div className="mingpian-top">{this.props.students[this.props.index].sname}</div>
                    <div className="mingpian-text">
                        <p>学号：{this.props.students[this.props.index].sno}</p>

                        <p>市场部：{this.props.students[this.props.index].market}</p>

                        <p>入学日期：{this.props.students[this.props.index].createTime}</p>

                        <p>学制：{this.props.students[this.props.index].term}</p>
                    </div>
                </div>
            </div>
        )
    }
}