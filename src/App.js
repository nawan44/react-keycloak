import React from "react";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import './App.css';
import {AppRouter} from './routes'


function App() {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App">
<AppRouter/>
      </div>
    </KeycloakProvider>
    );
}

export default App;