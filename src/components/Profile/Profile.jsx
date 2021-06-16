import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {


  return (
    <div>Main content
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>

  );
}

export default Profile