import React, { Component } from 'react';


export default class UserItem extends Component {
    
  
    render() {
        const{login,avatar_url,html_url}=this.props.user;
        return (
            <div className={'container','align-center'} style={{textAlign:'center',marginTop:'10px'}}>
                <img src={avatar_url} className='round-img 'style={{width:'60px'}} alt=''/>
        <h5 className='h4'>{login}</h5>
                <a className='btn btn-primary'href={html_url}>more in</a>
            </div>
        )
    }
}
