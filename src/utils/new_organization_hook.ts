import {
  NewOrganizationContext,
  NewOrganizationContextProvider,
} from './new_organization_context.tsx';
import useContextWrapper from './wrapper.ts';

const useNewOrganizationContext = () => useContextWrapper(NewOrganizationContext, {
  contextName: useNewOrganizationContext.name,
  providerName: NewOrganizationContextProvider.name,
});

export default useNewOrganizationContext;
