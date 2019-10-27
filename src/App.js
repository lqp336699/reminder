import React from 'react';
import { connect } from "react-redux";
import {addReminder} from "./actions";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text)
    }

    renderReminder=()=>{
        const { reminders } = this.props;
        console.log(reminders);
        return(
            <ul>
                {
                    reminders.map(reminder=>{
                        return(
                         <li key={reminder.id}>
                             <div>{reminder.text}</div>
                             <div>{reminder.time}</div>
                         </li>
                        )
                    })
                }
            </ul>
        )
    };

    render(){
        return (
            <div className="App">
                <div className="title">Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group mr-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="I have to..."
                            onChange={ (event) => this.setState({text: event.target.value}) }
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={()=>{this.addReminder()}}
                    >Add Reminder
                    </button>
                </div>
                { this.renderReminder() }
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        reminders: state
    };
};

export default connect(mapStateToProps, { addReminder })(App);
