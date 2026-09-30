import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const logout = () => {

        localStorage.removeItem("user");

        navigate("/login");
    };

    return (

        <div className="website">

            {/* NAVBAR */}

            <nav className="navbar">

                <h2>MyWebsite</h2>

                <div>

                    <button onClick={logout}>
                        Logout
                    </button>

                </div>

            </nav>


            {/* HERO */}

            <section className="hero">

                <div>

                    <h1>
                        Welcome, {user?.username}! 👋
                    </h1>

                    <p>
                        Welcome to your personal dashboard.
                    </p>

                    <button
                        onClick={() => alert("Welcome!")}
                    >
                        Get Started
                    </button>

                </div>

                {user?.image && (

                    <img
                        src={user.image}
                        alt="Profile"
                    />

                )}

            </section>


            {/* FEATURES */}

            <section className="features">

                <div className="feature-card">

                    <h3>👤 Profile</h3>

                    <p>
                        Manage your personal information.
                    </p>

                </div>


                <div className="feature-card">

                    <h3>☁️ Cloud Storage</h3>

                    <p>
                        Your profile image is stored securely in S3.
                    </p>

                </div>


                <div className="feature-card">

                    <h3>⚡ Fast</h3>

                    <p>
                        Simple and fast backend using Node.js.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Home;