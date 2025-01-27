import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId='430682189292-l6g1tvp152sp0qnd37ff3vkrbkk0ak5a.apps.googleusercontent.com';
  return (
        <GoogleOAuthProvider clientId={clientId}>
          <AccountProvider>
          <Messenger/>
          </AccountProvider>
        </GoogleOAuthProvider>
      );
}

export default App;
