// import { clsx } from 'clsx';
import styled from 'styled-components';
import css from './Profile.module.css';

//  // <div className={css.profile}>
//  </div>

const PageTitle = styled.div`
width: 200px;
    height: 300px;
    margin: 0 auto;
    padding: 0;
    border:  2px solid darkgray;
    position: absolute;
    top: 10px;
    `;

const Profile = ({
  username, 
  tag,
  location,
  avatar,
  stats: { followers, views, likes } }) => {
    return (
      <PageTitle >
          <div className={css.description}>
            <img
            src={avatar}
            alt={username}
            className={css.avatar}
            />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsBlock}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.statsBlock}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.statsBlock}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </PageTitle>
  )
};

export { Profile };