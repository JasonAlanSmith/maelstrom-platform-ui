/* eslint-disable max-len */

'use client';

import {
  FocusEvent,
  FormEvent,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { ChangedEventArgs } from '@syncfusion/ej2-react-inputs';

import useNewAccountContext from '../../utils/new_account_hook.ts';
import MPFormSubmitButton from '../ui/mpformsubmitbutton.tsx';
import MPTextBox from '../ui/mptextbox.tsx';

interface NewAccountInfo {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

function SignUpAccount() {
  const navigate = useNavigate();

  const {
    newAccount, setNewAccount,
  } = useNewAccountContext();

  const newAccountData: NewAccountInfo = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  };

  const handleFirstNameChange = (e: ChangedEventArgs) => {
    newAccountData.firstName = e.value?.toString() ?? '';
  };

  const handleLastNameChange = (e: ChangedEventArgs) => {
    newAccountData.lastName = e.value?.toString() ?? '';
  };

  const handleUserNameChange = (e: ChangedEventArgs) => {
    newAccountData.userName = e.value?.toString() ?? '';
  };

  const handlePasswordChange = (e: ChangedEventArgs) => {
    newAccountData.password = e.value?.toString() ?? '';
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewAccount({
      firstName: newAccountData.firstName, lastName: newAccountData.lastName, userName: newAccountData.userName, password: newAccountData.password,
    });
    navigate('/signup/organization');
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const ele = e.currentTarget;
    const { parentElement } = ele;
    if (parentElement) {
      const isValid = parentElement.classList.contains('e-valid-input');

      if (isValid) {
        parentElement.classList.add('e-success');
        parentElement.classList.remove('e-error');
      } else {
        parentElement.classList.remove('e-success');
        parentElement.classList.add('e-error');
      }
    }
  };

  return (
    <div className="signup-account">
      <div className="row">
        <div className="col welcome">
          <h1>Sign Up</h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          <p>Please provide your name. Then select a user name and password.</p>
        </div>
      </div>
      <div className="row">
        <form id="signup-account-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="first-name">
                First Name
                <MPTextBox
                  name="firstName"
                  id="first-name"
                  value={newAccount.firstName}
                  change={handleFirstNameChange}
                  readOnly={false}
                  onBlur={handleBlur}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="last-name">
                Last Name
                <MPTextBox
                  name="lastName"
                  id="last-name"
                  value={newAccount.lastName}
                  change={handleLastNameChange}
                  readOnly={false}
                  onBlur={handleBlur}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="user-name">
                User Name
                <MPTextBox
                  name="user-name"
                  id="user-name"
                  value={newAccount.userName}
                  change={handleUserNameChange}
                  readOnly={false}
                  onBlur={handleBlur}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="password">
                Password
                <MPTextBox
                  name="password"
                  id="password"
                  value={newAccount.password}
                  change={handlePasswordChange}
                  readOnly={false}
                  onBlur={handleBlur}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col signup-buttons">
              <MPFormSubmitButton caption="Next" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpAccount;
