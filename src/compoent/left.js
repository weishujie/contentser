import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import Img from './img'
import Select from './select'
import LeftSelects from '.././teacher/leftselect'
import ThreeLeft from '.././teacher2/threeLeft'




export default class Header extends Component{
    render(){
        return(
            <div className="left">
                <Img />
                <ul className="inbox_down">
                    {
                       (this.props.pathName=="/teacher/index"||this.props.pathName=="/teacher/view")&&this.props.pathName!="/super"?this.props.students.map(function (obj,index) {
                            return <Select
                                            key={index}
                                            index={index}
                                            student={obj}
                                            changeIndex={this.props.changeIndex}
                                            clickedStudent={this.props.clickedStudent}
                                            changeColorsSelect={this.props.changeColorsSelect}
                                            numbersLeft={this.props.numbersLeft}
                                            pathName={this.props.pathName}
                            />;

                        },this):<LeftSelects/>
                    }
                </ul>
            </div>

        )
    }
}
