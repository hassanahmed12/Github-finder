import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Search extends Component {
state={
    text:''
};
onChange=(e)=>this.setState({[e.target.name]: e.target.value});
//console.log(this.state.te}};

static propTypes={
    SearchUsers:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired

};
onSubmit=(e)=>{
    e.preventDefault();
    if(this.state.text===""){
        this.props.setAlert('please enter Something','')
       
    }  
    else{ 
   this.props.SearchUsers(this.state.text);
   this.setState({
       text:''
   })}
}

    render() {
        return (
            <div>
           <form  className="form" onSubmit={this.onSubmit}>
               <input type="text" className="form-control" placeholder="search for users" name="text" onChange={this.onChange}></input>
               <button type="Submit" className="btn btn-danger btn-lg btn-block">SEARCH</button>
           </form>
           <button className="btn btn-warning btn-lg btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>

        )
    }
}
