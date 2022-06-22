import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import './App.css';
import {AppRouter} from './routes'


function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <div className="App">
<AppRouter/>
      </div>
      </ReactKeycloakProvider>
    );
}

export default App;