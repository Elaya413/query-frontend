import { useEffect, useState } from "react";
import axios from "axios";
import env from '../Components/env'
const useFindUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      const response = await axios.get(`${env.API_URL}/api/user`, {
        withCredentials: true,
      });
      if (response.data.success) {
        setUser(response.data.user);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getUser();
  }, []);

  return [user, setUser, loading];
};

export default useFindUser;