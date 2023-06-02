import { Link } from 'react-router-dom';
import useSelector from '../../hooks/use-selector';
import UserItems from '../../components/user-items';

function UserControls() {

  const select = useSelector(state => ({
    authStatus: state.user.authStatus,
    userInfo: state.user.userInfo
  }));

  console.log(select.userInfo);

  return (
    <UserItems authStatus={select.authStatus}/>
  );
}

export default UserControls;
