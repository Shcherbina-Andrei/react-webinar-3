import {Routes, Route} from 'react-router-dom';
import useSelector from "../hooks/use-selector";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import Auth from './auth';
import Profile from './profile';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const authStatus = useSelector(state => state.user.authStatus);

  const activeModal = useSelector(state => state.modals.name);

  if (authStatus === 'Unknown') {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route path={''} element={<Main/>}/>
        <Route path={'/articles/:id'} element={<Article/>}/>
        <Route path={'/login'} element={<Auth />} />
        <Route path={'/profile'} element={<Profile />} />
      </Routes>
      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
