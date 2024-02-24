'use client';

import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

import { Organization } from '../../interfaces/organization.ts';
import {
  apiCall,
  baseUrl,
} from '../../utils/common.ts';
import useNewAccountContext from '../../utils/new_account_hook.ts';
import useNewOrganizationContext from '../../utils/new_organization_hook.ts';
import MPButton from '../ui/mpbutton.tsx';

const createUser = (): string => {
  /*
  firstName: string,
  lastName: string,
  userName: string,
  password: string,
  */

  // Create Clerk user via API
  // Looks like we can't do this until we're
  // in production. Stupid. Just stupid.
  // For now, can't test this, and will have to
  // mock user creation and test this in production.

  const err = 0;

  /*
    const err = clerkClient.users.createUser({
        firstName: firstName,
        lastName: lastName,
        username: userName,
        password: password,
    });
    */

  // Get new Clerk user's ID
  // For now, mock the data
  const clerkUserId = '_user7f9affa7a88af';

  if (!err) {
    return clerkUserId;
  }
  return err;
};

const buildOrganization = (
  organizationName: string,
  clerkUserId: string,
) => {
  const newOrgSid = v4();
  const creUpdDt = new Date().toISOString();

  const newOrg: Organization = {
    sid: newOrgSid,
    nm: organizationName,
    is_del: false,
    cre_by_sid: clerkUserId,
    cre_on_dt: creUpdDt,
    upd_by_sid: clerkUserId,
    upd_on_dt: creUpdDt,
  };

  return newOrg;
};

const postOrganization = async (organizationData: Organization) => {
  const url = `${baseUrl}/organization`;
  const r = await apiCall(url, organizationData, 'POST');
  return r;
};

const createOrganization = async (
  clerkUserId: string,
  organizationName: string,
): Promise<string> => {
  const od = buildOrganization(organizationName, clerkUserId);
  const r = await postOrganization(od);
  if (r.status === 201) {
    return new Promise<string>((resolve) => { resolve(od.sid); });
  }
  return new Promise<string>((resolve) => { resolve(''); });
};

const confirmOrganization = async (
  organizationSid: string,
): Promise<boolean> => {
  const url = `${baseUrl}/organization/${organizationSid}`;
  const r = await apiCall(url, {}, 'GET');
  const json = await r.json();
  if (json !== null && json !== undefined) {
    if (
      json[0].sid !== ''
            && json[0].sid !== undefined
            && json[0].sid !== null
    ) {
      return new Promise<boolean>((resolve) => { resolve(true); });
    }
    return new Promise<boolean>((resolve) => { resolve(false); });
  }
  return new Promise<boolean>((resolve) => { resolve(false); });
};

function SignUpConfirmation() {
  const { newAccount } = useNewAccountContext();
  const { newOrganization } = useNewOrganizationContext();

  const navigate = useNavigate();

  const handleClick = async () => {
    const clerkUserId = createUser();

    /*
      firstName,
      lastName,
      userName,
      password,
    */

    const sid = await createOrganization(
      clerkUserId,
      newOrganization.name,
    );

    if (sid !== '') {
      const r = await confirmOrganization(sid);
      if (!r) {
        navigate('/signup/failure');
      }
    } else {
      navigate('/signup/failure');
    }

    if (
      newAccount.firstName !== ''
      && newAccount.lastName !== ''
      && newAccount.userName !== ''
      && newAccount.password !== ''
      && newOrganization.name !== ''
      && newAccount.firstName !== undefined
      && newAccount.lastName !== undefined
      && newAccount.userName !== undefined
      && newAccount.password !== undefined
      && newOrganization.name !== undefined
      && newAccount.firstName !== null
      && newAccount.lastName !== null
      && newAccount.userName !== null
      && newAccount.password !== null
      && newOrganization.name !== null
    ) {
      navigate('/signup/success');
    } else {
      navigate('/signup/failure');
    }
  };

  return (
    <div className="signup-confirmation">
      <div className="row">
        <div className="col welcome">
          <h1>Confirmation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          You&apos;re creating an account for
          {' '}
          {newAccount.firstName}
          {' '}
          {newAccount.lastName}
          {' '}
          in the
          {' '}
          {newOrganization.name}
          {' '}
          organization.
          You&apos;re user name will be
          {' '}
          {newAccount.userName}
          .
        </div>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            block={false}
            caption="Create"
            click={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpConfirmation;
