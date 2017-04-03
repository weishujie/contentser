import React, {Component} from 'react';
import './teacher.css';
import Xiu from '.././compoent/img/xiuxue_03.png'

export default class Suspend extends Component {
    render() {
        return (
            <div>
                <div className="suspend" onClick={()=>this.props.showMask(this.props.obj)}>
                    <ul>
                        <li>
                            <span>{this.props.obj.sname}
                                {this.props.obj.status==2?<div className="imgXu"onClick={(e)=>{
                                e.stopPropagation();
                                }
                                }><img className="xiuImg" src={Xiu} alt=""/></div>:""}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}