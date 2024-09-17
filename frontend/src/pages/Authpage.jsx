import { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  const toggleAuthForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle between login and register
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {isLogin ? <Login /> : <Register />}

      <button
        className="mt-4 text-indigo-500 hover:underline text-center block mx-auto"
        onClick={toggleAuthForm}
      >
        {isLogin
          ? "Don't have an account? Register here"
          : "Already have an account? Login here"}
      </button>
    </div>
  );
};

export default AuthPage;
