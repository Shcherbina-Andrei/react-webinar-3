import { useCallback, useState } from 'react';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import LoginForm from '../../components/login-form';
import Navigation from '../../containers/navigation';
import useStore from '../../hooks/use-store';
import UserControls from '../../containers/user-controls';

function Auth() {
  const store = useStore();
  const [userData, setUserData] = useState({login: '', password: ''});

  const callbacks = {
    login: useCallback(({login, password}) => store.actions.user.login({login, password}))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    callbacks.login(userData);
  }

  return (
    <PageLayout>
      <UserControls />
      <Head title="Магазин" />
      <Navigation />
      <LoginForm userData={userData} setUserData={setUserData} onSubmit={onSubmit} />
    </PageLayout>
  );
}

export default Auth;