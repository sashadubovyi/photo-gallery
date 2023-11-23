import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import AdminPanel from './AdminPanel';
import BackBtn from 'components/BackBtn/BackBtn';
import s from './AdminPanel.module.scss';
import { auth } from '../../firebaseConfig';

const EnterAdminPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {})
      .catch(error => {
        alert('Невірний пароль або електронна пошта');
      });
  };

  if (user) {
    return <AdminPanel />;
  }

  return (
    <>
      <div className={s.eContainer}>
        <BackBtn />
        <form className={s.eForm} onSubmit={signIn}>
          <h1>Увійти</h1>
          <input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
          <button type="submit">УВІЙТИ</button>
        </form>
      </div>
    </>
  );
};

export default EnterAdminPage;
