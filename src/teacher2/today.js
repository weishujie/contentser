import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import Del from '.././compoent/img/yuan_11.png'

export default class Today extends Component {
    render() {
        console.log(this.props.todayArr)
        return (
            <div>
                <div className="yuanser"></div>
                <div className="todyFloat">
                    <span>{this.props.obj.des}</span>
                    <div>
                        <span>+{this.props.obj.operate}</span>
                        <span>$</span>
                    </div>
                    <div className="del-img">
                        <img src={Del} alt="" onClick={()=>this.props.del(this.props.todayArr,this.props.index)}/>
                    </div>
                </div>
            </div>
        )
    }
}