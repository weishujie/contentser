import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './teacher.css';

export default class SuspendTan extends Component {
    render() {
        return (
            <div className="Suspendtan" style={{display:this.props.flag==false?"none":"block"}}>
                    <div className="Sus">
                        <ul>
                            <li>
                                <h3>班级基本信息</h3>
                            </li>
                            <li>
                                <h3>姓名</h3>
                                    <input type="text" placeholder={this.props.flag.sname}/>
                            </li>
                            <li>
                                <h3>班级</h3>
                                <select name="" id="">
                                    <option value="">1508</option>
                                    <option value="">1507</option>
                                </select>
                            </li>
                            <li>
                                <h3>学号</h3>
                                <input type="text" placeholder={this.props.flag.sno}/>
                            </li>
                            <li>
                                <h3>性别</h3>
                                <select name="" id="">
                                    <option value="">男</option>
                                    <option value="">女</option>
                                </select>
                            </li>
                            <li>
                                <h3>身份证号</h3>
                                <input type="text" placeholder='234567788'/>
                            </li>
                            <li>
                                <button onClick={this.props.cancelMask}>取消</button>
                                <button onClick={this.props.cancelMask}>确定</button>
                            </li>
                        </ul>

                    </div>
                </div>
        )
    }
}