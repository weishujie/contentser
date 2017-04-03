/**
 * Created by Administrator on 2017/3/20 0020.
 */
import React, {Component} from 'react';
import './teacher.css';
import '.././compoent/common.css';
import Rewards from '.././compoent/rewards';
import Suspend from './suspend';
import Icon from '../compoent/img/guan_03.png'


export default class Detail  extends Component {

    render() {
        return (
            <div className="middle">
                <div className="middle-box">
                    <Rewards name={"班级管理"} backgroundColor="#EFD63B" img={Icon}  className="jiangli" />
                    <div>
                        {
                            this.props.students.map((obj,index)=>{
                                return <Suspend
                                     key={index}
                                     index={index}
                                     obj={obj}
                                     suspend={this.props.students}
                                     showMask={this.props.showMask}
                                 />
                            },this)
                        }
                    </div>
                    <div className="addShuJ" showMask={this.props.showMask} onClick={()=>this.props.showMask(this.props.students)}>
                        <span>+</span>
                    </div>
                </div>
            </div>

        )
    }


}


