import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const kc = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    kc.init({
      onLoad: "check-sso",
    })
      .then((authenticated) => {
        if (authenticated) {
          alert("Authenticated");
          setLogin(authenticated);
          setToken(kc.token);
          setRefreshToken(kc.refreshToken);
          console.log("Access Token:", kc.token);
          console.log("Refresh Token:", kc.refreshToken); // Print refresh token to console
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = () => {
    // Redirect to the Keycloak login URL
    kc.login();
  };

  const logout = () => {
    kc.logout();
  };

  return { token, refreshToken, loading, isLogin, login, logout };
};

export default useAuth;
