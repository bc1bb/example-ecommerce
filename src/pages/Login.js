import './style/forms.css';

function Login() {
    return (
        <main className="container flex-center threepercent-lr-margin wrap">

            <form className="container wrap flex-column" action="#" method="post">
                <div className="container wrap flex-column">
                    <label hidden="hidden" htmlFor="name">Username</label>
                    <input type="text" required placeholder="Username" id="name" name="user_name" />
                </div>
                <div className="container wrap flex-column">
                    <label hidden="hidden" htmlFor="password">Password</label>
                    <input type="password" required placeholder="Password" id="password" name="password" />
                </div>

                <div className="container wrap flex-column">
                    <button type="submit ">Login</button>
                </div>
            </form>

        </main>
    )
}

export default Login;