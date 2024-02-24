'use client';

import { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import useNewOrganizationContext from '../../utils/new_organization_hook.ts';
import MPButton from '../ui/mpbutton.tsx';
import MPTextBox from '../ui/mptextbox.tsx';

export default function SignUpOrganization() {
  const { newOrganization, setNewOrganization } = useNewOrganizationContext();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewOrganization({ name: newOrganization.name });
    navigate('/signup/confirmation');
  };

  return (
    <div className="signup-organization">
      <div className="row">
        <div className="col welcome">
          <h1>
            Congratulations! You have successfully created an account on the
            Maelstrom Platform.
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          Next, you need to create an organization.
        </div>
      </div>
      <div className="row">
        <div className="col signup-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="org-name">Organization Name</label>
              <MPTextBox
                id="org-name"
                change={(e) => setNewOrganization({ name: e.value ? e.value.toString() : '' })}
                value={newOrganization.name}
                readOnly={false}
              />
            </div>
            <div className="row">
              <div className="col signup-buttons">
                <MPButton
                  css="signup-button-width"
                  caption="Next"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
