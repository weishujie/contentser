import React, {Component, PropTypes} from 'react';
import './login.css';

 export default class ClassInput extends Component{
    constructor(props) {
        super(props);
        this.state={
             
        }

    }
    render(){
        // console.log(this.props.prompt)
        return(
            <select type="text" className="select-item"  defaultValue="1">

                {
                    this.props.prompt.map((val,index)=>{
                        return<option key={val} value={index}>{val}</option>
                    })

                }

            </select>
        )
    }
}