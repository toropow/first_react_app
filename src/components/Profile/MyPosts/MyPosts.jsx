import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.postsData.map(pst =><Post message={pst.message} likeCounts={pst.likeCounts} />)

  return (
    <div className={s.PostBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>

    </div>
  );
}

export default MyPosts