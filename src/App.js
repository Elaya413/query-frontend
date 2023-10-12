import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import JoinChat from "./Components/JoinChat";
import Login from "./Components/Login";
import Register from "./Components/Register";
import env from './Components/env';
import Footer from "./Components/Footer";
import useFindUser from "./Hooks/useFindUser";
import UserContext from "./Context/UserContext";


import io from "socket.io-client";
import { useEffect } from "react";
const socket = io.connect(`${env.API_URL}`);

function App() {
  const navigate = useNavigate();
  const [user, setUser, loading] = useFindUser();

  useEffect(() => {
    if (user) {
      navigate("/joinchat");
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div className="App">
        <Header user={user} />
        <div className="main">
          <Routes>
            <Route path="/joinchat" element={<JoinChat socket={socket} />} />
     
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;