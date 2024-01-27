import axios from "axios";
import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Protected = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  
    axios
      .get("/documents", config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data ? (
    <>
      {data.map((rec, i) => (
        <h3 key={i}>{rec}</h3>
      ))}
    </>
  ) : (
    []
  );
};
export default Protected;
