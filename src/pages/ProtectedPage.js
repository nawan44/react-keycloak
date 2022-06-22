import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

const ProtectedPage = () => {
  const [keycloak, initialized] = useKeycloak();

  return (
    <div>
      <div>{`User is ${
        !keycloak.authenticated ? 'NOT ' : ''
      }authenticated`}</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </div>
  )
}

export default ProtectedPage