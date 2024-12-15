import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.data.Success) {
        navigate("/web"); // Navigate to the dashboard on success
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-end mr-36 h-full items-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="imageLogin fixed top-0 left-0 w-1/2 h-[100vh]">
        <img
          src="images/LoginImage.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
      <Card className="w-[533px] px-38 bg-white dark:bg-gray-800 rounded-lg border border-white transition-all duration-300">
        <CardHeader className="text-center border-b border-gray-200 dark:border-gray-700 mb-4">
          <img
            src="/images/resikel.png"
            alt="Resikel Logo"
            className="w-full h-auto max-h-16 object-contain mx-auto"
          />
          <h1>Welcome Back!</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300 text-left"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-gray-700 dark:text-gray-300 text-left"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full text-white transition duration-200"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
