import React, { Component } from 'react'
import UserItem from './UserItem';
export default class Users extends Component {
  
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(users=>{
                    return<UserItem key={users.id} user={users}></UserItem>
                })}
            </div>
        )
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1em'
}