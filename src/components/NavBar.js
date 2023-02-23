function NavBar() {
    return (
        <div>
            <div className="space" />
            <nav className="container space-between">
                <div className="container flex-left threepercent-lr-margin">
                    <div className="container flex-left">
                        <a href="/" className="important-link">Shop</a>
                    </div>
                </div>
                <div className="container flex-right threepercent-lr-margin">
                    <div className="container flex-right">
                        <a href="/login" className="important-link">Account</a>
                    </div>
                </div>
            </nav>
            <div className="space" />

            <hr className="sep" />

            <div className="space" />
        </div>
    )
}

export default NavBar;