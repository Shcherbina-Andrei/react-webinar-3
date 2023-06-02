import './style.css';

function LoginForm({userData, setUserData, onSubmit}) {
  
  return (
    <form className='LoginForm' onSubmit={onSubmit}>
        <h2 className='LoginForm-title'>Вход</h2>
        <label className='LoginForm-label'>
          Логин
          <input type='text'
            value={userData.login}
            onChange={(e) => setUserData({...userData, login: e.target.value})} 
            required 
          />
        </label>
        <label className='LoginForm-label'>
          Пароль
          <input type='password'
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})} 
            required
          />
        </label>
        <button type='submit'>Войти</button>
      </form>
  );
}

export default LoginForm;
