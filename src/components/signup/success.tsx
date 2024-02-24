'use client';

import useNewAccountContext from '../../utils/new_account_hook.ts';
import useNewOrganizationContext from '../../utils/new_organization_hook.ts';

export default function SignUpSuccess() {
  const { newAccount } = useNewAccountContext();
  const { newOrganization } = useNewOrganizationContext();

  return (
    <div>
      <h1>Success</h1>
      <h3>
        Successfully created an account for
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
      </h3>
      <h3>Login to continue to the Maelstrom Platform.</h3>
    </div>
  );
}
