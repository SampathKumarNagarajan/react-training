import React,{useEffect} from 'react';
import ProfileCard from './ProfileCard';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/actions/UserActions';
const UserProfileApp = (props) => {

    useEffect(() => {
      props.fetchUser();
      
    },[]);
    return (
        
        <div className='user-profile-grid-container'>
          {
          props.users.map((user) => (
            <div>
              <ProfileCard user={user} />
            </div>
          ))
          }
        
        </div>
    )
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUsers())
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.User.data
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfileApp);