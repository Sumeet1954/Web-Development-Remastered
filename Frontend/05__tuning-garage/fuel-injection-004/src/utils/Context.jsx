import { createContext, useState, useEffect } from "react";
import api from "../utils/api";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  let fetchUsers = async () => {
    const response = await api.get("");
    return response.data;
  };
  console.log(data);

  useEffect(() => {
    fetchUsers().then(setData).catch(console.error);
  }, []);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
