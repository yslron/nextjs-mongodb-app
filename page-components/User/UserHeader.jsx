/* eslint-disable prettier/prettier */
import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import styles from './UserHeader.module.css';

const UserHeader = ({ user }) => {
  return (
    <Container className={styles.root} column alignItems="center">
      <div className={styles.avatar}>
        <Avatar size={168} username={user.username} url={user.profilePicture} />
      </div>
      <h2 className='grid place-items-center h-scree'>
        <div className={styles.name}>{user.name}</div>
        <div className="content-around ">@{user.username}</div>
      </h2>
      <p className={styles.bio}>{user.bio}</p>

    </Container>


  );
};

export default UserHeader;
