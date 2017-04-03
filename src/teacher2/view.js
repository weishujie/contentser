import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';
import TopLeft from './threeTop'
import TopRight from './topRight'
import Rewards from '.././compoent/rewards';
import Today from './today';
import HistoryJ from './historyJJ';
import HistoryBanner from './historybanner';
import Cycle from './cycle';
import ClassTeacher from './classteacher';
import Icon1 from '.././compoent/img/guan_03.png'

export default class View extends Component {
    constructor(props) {
        super(props);
        this.del=this.del.bind(this);
        this.state = {
            record: {
                "data": [{
                    "id": 380,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-24 09:44:42",
                    "year": 2017,
                    "month": 3,
                    "day": 24,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 379,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-24 09:44:40",
                    "year": 2017,
                    "month": 3,
                    "day": 24,
                    "week": 2,
                    "des": "班委",
                    "operate": 500
                }, {
                    "id": 378,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-24 09:44:37",
                    "year": 2017,
                    "month": 3,
                    "day": 24,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 377,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-01-11 09:44:34",
                    "year": 2017,
                    "month": 1,
                    "day": 11,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 376,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-06 08:38:47",
                    "year": 2017,
                    "month": 3,
                    "day": 6,
                    "week": 2,
                    "des": "请假5天",
                    "operate": -10000
                }, {
                    "id": 375,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-07 08:38:44",
                    "year": 2017,
                    "month": 3,
                    "day": 7,
                    "week": 2,
                    "des": "不完成作业",
                    "operate": -1200
                }, {
                    "id": 374,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-07 08:38:40",
                    "year": 2017,
                    "month": 3,
                    "day": 7,
                    "week": 2,
                    "des": "演讲比赛",
                    "operate": 500
                }, {
                    "id": 373,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:39",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "生活",
                    "operate": 100
                }, {
                    "id": 372,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:37",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 371,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:35",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "点多",
                    "operate": 500
                }, {
                    "id": 356,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-15 08:55:45",
                    "year": 2017,
                    "month": 3,
                    "day": 15,
                    "week": 3,
                    "des": "三好学生",
                    "operate": 5
                }]
            },
            oparateRecord: false
        }
    }

    componentWillMount() {
        if (!this.state.oparateRecord) {
        const data = this.state.record.data;

        let todayArr = [];
        let historyObj = {};
        let order = [];

        let todayTime = new Date();
        //生成今天八位十进制字符备用
        todayTime = `${todayTime.getYear() + 1900}${(todayTime.getMonth() + 1).toString().length == 1 ? "0" + (todayTime.getMonth() + 1) : (todayTime.getMonth() + 1)}${todayTime.getDate().toString().length == 1 ? "0" + todayTime.getDate() : todayTime.getDate()}`;
        data.map((obj,index)=>{
            let token;
            token=obj.time.slice(0,10).replace(/-/g,"");
            //向每一个对象中加入token字段
            obj.token=token;
            //向顺序数组中加入每一个token
            order.push(token);
        });

        order=[...new Set(order)];
        order=order.sort((a,b)=>b-a);
        if(order[0]==todayTime){
            order.splice(0,1)
        }
        order.forEach((token,index)=>{
            historyObj[token]=[]
        });

        data.forEach((obj,index)=>{
            if(obj.token==todayTime){
                todayArr.push(obj);
            }else{
                historyObj[obj.token].push(obj)
            }
        });

        this.setState({
            oparateRecord:{
                todayArr,
                historyObj,
                order
            }
        })

         }
    }

    
    render() {
        // console.log(this.state.oparateRecord.todayArr)
console.log(this.props.add)
        let add = 2+2*this.props.add;//长度
        let order = [...this.state.oparateRecord.order];//结构赋值
        order = order.splice(0,add)//截取
        return (
            <div className="middle">
                <div className="three-box">
                   <div className="Three-top">
                       <TopLeft students={this.props.students} index={this.props.index}/>
                       <TopRight students={this.props.students} index={this.props.index}/>
                   </div>
                    <Rewards name={"今日奖罚记录"} backgroundColor="#EFD63B" img={Icon1}  className="jiangli"/>
                    <div className="todasss">
                        <div>{`${new Date().getYear() + 1900}年${(new Date().getMonth() + 1).toString().length == 1 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}月${new Date().getDate().toString().length == 1 ? "0" + new Date().getDate() : new Date().getDate()}日`
                        }</div>
                        {
                            this.state.oparateRecord.todayArr
                                .map((obj,index)=>{
                                    return <Today
                                        key={index}
                                        index={index}
                                        obj={obj}
                                        del={this.del}
                                        todayser={this.state.record.data}
                                        todayArr={this.state.oparateRecord.todayArr}
                                    />
                                })
                        }

                    </div>
                    <HistoryBanner students={this.props.students} index={this.props.index}/>
                    <div className="Ccyle">
                        <Cycle/>
                    </div>
                    <Rewards name={"班级教师"} backgroundColor="#EFD63B" img={Icon1}  className="jiangli" />
                      <div className="yyyy">
                          <ClassTeacher gradeList={this.props.gradeList}/>
                      </div>
                    <Rewards name={"历史奖罚记录"} backgroundColor="#EFD63B" img={Icon1}  className="jiangli" />
                    <div className="hists">
                        {
                            order.map((token,index)=>{
                                return  <div key={index}>
                                    <div className="yuansers"> </div>
                                    <div>{`${token.slice(0,4)}年${token.slice(4,6)}月${token.slice(6,8)}日`}</div>
                                    <div>
                                        {
                                            this.state.oparateRecord.historyObj[token].map((obj,index2)=>{
                                                return <HistoryJ
                                                    key={index2}
                                                    index={index}
                                                    obj={obj}
                                                    todayser={this.state.record.data}
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    del(arr,index){
        this.setState({
            index:index
        });
        arr.splice(index,1);
        console.log(arr);
    }

}