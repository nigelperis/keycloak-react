import Protected from "./components/Protected";
import Public from "./components/Public";

import useAuth from "./hooks/useAuth";

function App() {
  const { loading, isLogin, login, logout } = useAuth();
  if (loading) {
    return <div>Loading....</div>;
  }
  return isLogin ? (
    <>
      <button type="submit" onClick={logout}>
        Logout
      </button>
      <Protected />
    </>
  ) : (
    <Public login={login} />
  );
}

export default App;
