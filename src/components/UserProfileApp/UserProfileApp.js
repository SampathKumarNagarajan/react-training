import React,{useEffect, useState} from 'react';
import ProfileCard from './ProfileCard';
import { connect } from 'react-redux';
import  Paginator  from './Paginator';
import { fetchUsers } from '../../redux/actions/UserActions';
import { setActivePage } from '../../redux/actions/PaginatorActions';
const UserProfileApp = (props) => {

    useEffect(() => {
      
      props.fetchUser(props.current_page);
      
    },[props.current_page]);

    
    return (
        
        <div className='user-profile-grid-container'>
          {
          props.users.data.map((user) => (
            <div>
              <ProfileCard user={user} />
            </div>
          ))
          }
        <Paginator page={props.current_page} totalPages={props.users.total_pages} total={props.users.total} />
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (page) => dispatch(fetchUsers(page)),
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.User,
    current_page : state.Paginator.current_page
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfileApp);