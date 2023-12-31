import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginAdmin } from "../../api/AuthenticationApi";
import { useSharedData } from "../../functions/SharedDataContext";
import Loader from "../utils/Loader";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, setIsLogin } = useSharedData();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    try {
      setIsLoading(true); // Start loading
      const response = await loginAdmin(data);
      if (response.ok) {
        const { message, data } = await response.json();
        setIsLogin(true);
        window.localStorage.setItem("token", data.token);
        window.sessionStorage.setItem("token", data.token);
        console.log(window.localStorage.getItem("token"));
        toast.success(message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  };
  console.log("Handle Logout", isLogin);

  return (
    <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 overflow-hidden h-screen m bg-main">
      <div className="hidden md:block">
        <img
          src="/pic-1.jpg"
          className="object-cover w-full h-full"
          alt="quiz-mine"
        />
      </div>

      <div className="flex justify-center max-h-screen">
        <form
          className="border-primary border-solid border-2 rounded-lg h-fit my-auto p-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl text-center font-bold mb-2">Quiz Mine</h1>
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome to Quizzes World
          </h2>

          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email :
            </label>
            <input
              className="border-ternary_light border-solid border-2 rounded-full px-4 py-1 focus:border-primary focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your E-mail"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="font-bold">
              Password :
            </label>
            <input
              className="border-ternary_light border-solid border-2 rounded-full px-4 py-1 focus:border-primary focus:outline-none"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>

          <div className="mb-4">
            <div className="bg-primary mt-2 border-2 border-solid rounded-full px-4 py-1 text-main text-xl w-full">
              <button
                className="text-main text-xl w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Log In"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
