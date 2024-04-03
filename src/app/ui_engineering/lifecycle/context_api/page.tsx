
"use client"

import { AuthProvider } from '@/app/ui_engineering/lifecycle/context_api/(components)/authContext';
import LoginButton from '@/app/ui_engineering/lifecycle/context_api/(components)/loginButton';

const App = () => {
  return (
    <AuthProvider> {/* Use AuthProvider as a component */}
      <LoginButton />
    </AuthProvider>
  );
};

export default App;