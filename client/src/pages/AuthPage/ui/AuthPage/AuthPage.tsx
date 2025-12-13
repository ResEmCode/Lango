import { useState } from 'react';

import { LoginForm, RegisterForm } from '@/features/auth';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className={styles.auth}>
      {mode === 'login' ? (
        <LoginForm onSwap={() => setMode('register')} />
      ) : (
        <RegisterForm onSwap={() => setMode('login')} />
      )}
    </div>
  );
};

export default AuthPage;
