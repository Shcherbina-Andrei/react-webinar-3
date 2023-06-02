import { Link } from 'react-router-dom';
import './style.css';

function UserItems({authStatus, username}) {

  return (
    <div className='UserItems'>
      {
        authStatus === 'Auth'
        ? <div className='UserItems-Profile'>
            <Link className='UserItems-ProfileLink' to='/profile'>{username}</Link>
            <button>Выход</button>
          </div>
        : <button className='UserItems-entry'>Вход</button>
      }
    </div>
  );
}

export default UserItems;