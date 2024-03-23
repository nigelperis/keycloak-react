import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const kc = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

const useAuth = () => {
  const isRun = useRef(false);
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
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const login = () => {
    kc.login();
  };
  const logout = () => {
    kc.logout();
  };
  return { loading, isLogin, login, logout };
};

export default useAuth;
