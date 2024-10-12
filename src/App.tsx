import { withDevCycleProvider } from '@devcycle/react-client-sdk';
import { UserIdentifyProvider } from './providers/user-identify';

function App() {
  return (
    <UserIdentifyProvider>
      <h1>DevCycle Identify Demo</h1>
    </UserIdentifyProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withDevCycleProvider({
  sdkKey: import.meta.env.VITE_DEVCYCLE_CLIENT_SDK_KEY,
})(App);
