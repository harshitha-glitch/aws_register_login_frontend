import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            data.append("username", username);
            data.append("email", email);
            data.append("password", password);

            if (image) {
                data.append("image", image);
            }

            const response = await axios.post(
                "http://localhost:5000/api/register",
                data
            );

            if (response.data.success) {
                alert("Registration successful!");

                // Move to login page
                navigate("/login");
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

                <h1>Create Account</h1>

                <p className="subtitle">
                    Join us and create your account
                </p>

                <form onSubmit={registerUser}>

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

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

                    <label>Profile Image</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p className="bottom-text">
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Register;