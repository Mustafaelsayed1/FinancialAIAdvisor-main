import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Frontend/components/LOGIN&REGISTRATION/Login/Login";
import Signup from "./Frontend/components/LOGIN&REGISTRATION/Signup/Signup";
import Home from "./Frontend/components/Home/home";
import NavBar from "./Frontend/components/Home/Navbar";
// import PaymentHistory from "./Frontend/components/Dashboard/PaymentHistory";
import Footer from "./Frontend/components/Home/Footer";
import MiniNavBar from "./Frontend/components/Home/Mininavbar";
import Chatbot from "./Frontend/components/chatbot/chatbot";
function App() {
  return (
    <BrowserRouter>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        </link>
      </head>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Chatbot />
              <Footer />
            </>
          }
        />{" "}
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavBar />
              <Signup />
            </>
          }
        />

        {/* <Route
          path="/PaymentHistory"
          element={
            <>
              <MiniNavBar />
              <PaymentHistory />
              <Sidebar />
              <Footer />
            </> 
          }
        />*/}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
