import React, {Component, PropTypes} from 'react';
import './login.css';
export  default class InputItem extends Component {
    render(){
        console.log(this.props);
            if(this.props.color=="yellow"){
                return (
                    <button className="button-item" onClick={this.props.login}>登录</button>
                )
            }else{
                return (
                    <input type="text" className="input-item" placeholder={this.props.placeholder} />
                )
            }
    }
}