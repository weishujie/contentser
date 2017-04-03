import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import Ctcle from '.././compoent/img/teacher_15.png'
import Ctcle2 from '.././compoent/img/class_15.png'


export default class Cycle extends Component {
    render() {
        return (
            <div>
                <div className="xueQi">
                    <ul>
                        <li>
                           <span className="gang">

                           </span>
                           <span>
                               <img src={Ctcle} alt=""/>
                               &nbsp;
                               学期
                           </span>
                            <select name="" id="">
                                <option value="">第一教学周期</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div className="xueQi">
                    <ul>
                        <li>
                       <span className="gang">

                       </span>
                       <span>
                           <img src={Ctcle2} alt=""/>
                           &nbsp;
                           学期
                       </span>
                            <select name="" id="">
                                <option value="">第一教学周期</option>
                            </select>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}