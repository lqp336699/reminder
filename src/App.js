import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addReminder,deleteReminder } from './action/index'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }

  renderReminder = ()=>{
    const { reminders } =  this.props;
    return(
        <ul className="list-group col-sm-8 mt-2">
          {reminders.map((reminder)=>{
            return(
                <li className="list-group-item" key={reminder.id}>
                  <div className="list-item">
                    <div>{ reminder.text }</div>
                    <div className="delete-icon" >
                      <span className="glyphicon glyphicon-remove" onClick={ this.deleteReminder(reminder.id) }></span>
                    </div>
                  </div>
                </li>
            )
          })}
        </ul>
    )
  };

  render(){
    return(
        <div className="app">
          <div className="title">Reminder pro</div>
          <div className="from-inline">
            <div className="from-group mr-2">
              <input
                  type="text"
                  className="from-control"
                  onChange={(event)=>{this.setState({text:event.target.value})}}
              />
            </div>
            <button
                type="button"
                className="btn btn-success"
                onClick={ this.addReminder }
            >
              Add Reminder
            </button>
          </div>
          { this.renderReminder() }
        </div>
    )
  }

  addReminder=()=>{
   this.props.addReminder(this.state.text)
  };

  deleteReminder=(id)=>{
    this.props.deleteReminder(id);
  }

}

const mapStateToProps = (state) => {
  return {
    reminders: state
  };
};

export default connect(mapStateToProps,{ addReminder,deleteReminder })(App);
