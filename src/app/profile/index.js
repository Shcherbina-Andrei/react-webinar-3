import { Navigate } from 'react-router-dom';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import ProfileCard from '../../components/profile-card';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import UserControls from '../../containers/user-controls';
import useSelector from '../../hooks/use-selector';
import useTranslate from '../../hooks/use-translate';

function Profile() {
  const select = useSelector(state => ({
    user: state.user
  }));
  const {t} = useTranslate();
  if (select.user.authStatus !== 'Auth') {
    return (
      <Navigate to='/login' />
    )
  }

  return (
    <PageLayout>
      <UserControls />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <ProfileCard userInfo={select.user.userInfo} t={t}  />
    </PageLayout>
  );
}

export default Profile;
