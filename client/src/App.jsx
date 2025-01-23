import { GoogleOAuthProvider } from '@react-oauth/google';

//components

import Messenger from "./components/Messenger";

function App(){
const clientId ='109888512764-ak09n66r1e98vm69srkcro8915b6cgn6.apps.googleusercontent.com';

    return(
    <GoogleOAuthProvider clientId={clientId}>
        <Messenger />
    </GoogleOAuthProvider >
    );
}

export default App;