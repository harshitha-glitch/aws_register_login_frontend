import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/login",
                {
                    email: email,
                    password: password
                }
            );

            if (response.data.success) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                );

                alert("Login successful!");

                navigate("/home");

            } else {

                alert(response.data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }
    };

    return (

        <div className="register-page">

            <div className="register-box">

                <h1>Welcome Back</h1>

                <p className="subtitle">
                    Login to your account
                </p>

                <form onSubmit={loginUser}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="bottom-text">

                    Don't have an account?{" "}

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Login;