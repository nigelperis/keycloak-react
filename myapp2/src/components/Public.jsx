// eslint-disable-next-line react/prop-types
const Public = ({ login }) => {
  return (
    <div>
      <h1>RECRUITMENT APP</h1>
      <p>Click on the below button to authenticate</p>
      <button onClick={login}>Redirect to Keycloak</button>
    </div>
  );
};

export default Public;