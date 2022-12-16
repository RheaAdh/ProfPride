;
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserStack from './user.stack';

export default function Router() {
  return (
    <SafeAreaProvider>
      <UserStack/>
    </SafeAreaProvider>
  );
}