import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
        <div>
          <img src='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg' />
          <div className={s.descriptionBlock}>ava + descriptions</div>
        </div>
    );
}

export default ProfileInfo