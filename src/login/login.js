import React, {Component,PropTypes} from 'react';
import {connect} from'react-redux'
import {teacherLoginData} from './actions'
// import {beforeGetTeacherAllData, GetTeacherAllData, getSuper, beforeSuperData, studentType, fixedUrl} from './actions'
import {hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import './login.css'
import ClassInput from './classinput'
import InputItem from './inputitem'
import Verification from './Verification'



class Login extends Component{
     constructor(props) {
         super(props);
         this.login = this.login.bind(this);
         this.getTrueCollege = this.getTrueCollege.bind(this);
         this.getIden = this.getIden.bind(this);
         this.state={
             college: "数字媒体web",
             authority: "教师",
             username: "admin",
             password: "admin",
             id: "",
             url: "http://192.168.60.110:8080",
             laissezPasser: false
         }
     }
    getTrueCollege(value){
        this.setState({
            college:value
        })
    }
    render(){
        return(
            <div style={{height:"100%"}}>{
                this.state.laissezPasser?<div></div>:<div className="login-bg">
                <div className="login-box">
                    <ClassInput prompt={['数字媒体web','数字媒体ui']}
                                ref="college"
                    />
                    <ClassInput prompt={['学生','教师','超级管理员']}
                                ref="authority"
                    />
                     <InputItem ref="username" name="" placeholder="user"/>
                     <InputItem ref="password" name="" placeholder="password"/>
                    <Verification  getId={this.getIden}/>
                     <InputItem ref="btn" name="" color="yellow" login={this.login}/>
                </div></div>
            }</div>
        )
    }
    getIden(value) {
        this.setState({
            id: value
        })
    }

    login() {
        let user = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
            .then(json=>json.json())
            .then(json=> {
                if (json.status == 201) {
                    alert(json.message);
                } else if (json.status == 200) {
                    this.props.onSuper(json);
                    // console.log(this.props);
                    this.props.onSuper(teacherLoginData(json))
                    hashHistory.push("/super");
                }
            }, err=> {
                alert("服务器异常");
            })
    }

    // login(college, authority, username, password, identify, laissezPasser) {//验证拿数据
    //     const {dispatch} = this.props;
    //     if ((identify.toLowerCase() == this.state.id.toLowerCase()) || laissezPasser) {
    //         if (authority == 1) {
    //             dispatch(beforeGetTeacherAllData());
    //             console.log(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`)
    //             fetch(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`,
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/x-www-form-urlencoded"
    //                     }
    //
    //                 })
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     if (json.status == 201) {
    //                         localStorage.clear();
    //                         alert("用户名或密码错误")
    //                     } else {
    //
    //                         dispatch(GetTeacherAllData(json));
    //                         // if(authority==3){
    //                         //     dispatch(studentType("学生入口"))
    //                         // }
    //                         this.saveLocation(username, password, authority, college);
    //                         hashHistory.push("/classManager");
    //                     }
    //                 })
    //                 .catch(err=> {
    //                     localStorage.clear();
    //                     alert("服务器异常")
    //                 });
    //
    //
    //         } else if (authority == 2) {
    //             dispatch(beforeSuperData());
    //             fetch(`${this.state.url}/cms/login/login.do`,
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/x-www-form-urlencoded"
    //                     },
    //                     body: `roleName=${username}&password=${password}&roleType=2&officeType=${college}`
    //                 })
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     // console.log(json)
    //                     if (json.status == 201) {
    //                         localStorage.clear();
    //                         alert("用户名或密码错误")
    //                     } else {
    //                         this.saveLocation(username, password, authority, college);
    //                         dispatch(getSuper(json));
    //                         hashHistory.push("/superManager");
    //
    //                     }
    //
    //                 },(err)=> {
    //                     localStorage.clear();
    //                     console.log(err);
    //                     alert("请检查用户名密码")
    //                 })
    //         } else if (authority == 0) {
    //
    //             //     }
    //
    //             //学生权限
    //             dispatch(beforeGetTeacherAllData());
    //             // // http://192.168.60.100:8080/cms/login/login.do?roleName=admin&password=root&roleType=1&officeType=1
    //             // http://192.168.60.100:8080/cms/login/login.do?roleName=160202&roleType=0
    //             fetch(`${this.state.url}/cms/login/login.do`,
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/x-www-form-urlencoded"
    //                     },
    //                     body: `roleType=0&roleName=${username}`
    //                 })
    //                 .then(response => response.json())
    //                 .then(json => {
    //
    //                     if (json.status == 201) {
    //                         localStorage.clear();
    //                         alert("用户名或密码错误")
    //                     } else {
    //                         alert(json);
    //                         this.saveLocation(username, password, authority, college);
    //                         dispatch(GetTeacherAllData(json));
    //                         hashHistory.push("/classManager");
    //                     }
    //
    //                 }, (err)=> {
    //                     localStorage.clear();
    //                     alert("连接失败")
    //                 });
    //
    //         }
    //     }
    //     else {
    //         alert("验证码不正确")
    //     }
    //
    // }
}

function maneger(state) {
    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};

// function select(state) {
//     return {loginData: state.loginData}
// }

export default connect(maneger,mapDispatchToProps)(Login);

//
// <input type="text" placeholder="user" ref="username"/>
// <input type="password" placeholder="password" ref="password"/>
//     <button onClick={this.login}>登陆</button>