import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './view.css';


export default class ClassTeacher extends Component {
    render() {
        return (
            <div className="banTercher">
                <ul>
                    <li>
                        <div className="ttt">
                            <h3>任课老师</h3>
                        </div>
                        <div className="tth">
                            <span>{}</span>
                            <span>|</span>
                            <span>WEB</span>
                            <span>|</span>
                            <span>WEB</span>
                        </div>
                    </li>
                    <li>
                        <div className="ttt">
                            <h3>班主任</h3>
                        </div>
                        <div className="tth">
                            <span>胡乃权</span>
                            <span>|</span>
                            <span>WEB</span>
                            <span>|</span>
                            <span>WEB</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}