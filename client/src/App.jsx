import { GoogleOAuthProvider } from '@react-oauth/google';

//components

import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App(){
const clientId ='109888512764-ak09n66r1e98vm69srkcro8915b6cgn6.apps.googleusercontent.com';

    return(
    <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <Messenger />
        </AccountProvider>
    </GoogleOAuthProvider >
    );
}

export default App;