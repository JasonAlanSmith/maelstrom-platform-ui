import {
  NewAccountContext,
  NewAccountContextProvider,
} from './new_account_context.tsx';
import useContextWrapper from './wrapper.ts';

const useNewAccountContext = () => useContextWrapper(NewAccountContext, {
  contextName: useNewAccountContext.name,
  providerName: NewAccountContextProvider.name,
});

export default useNewAccountContext;
