function loginUser(req, res) {
    const user = req.body.username;
    // WARNING: Huge SQL Injection Vulnerability!
    const query = "SELECT * FROM users WHERE username = '" + user + "'";
    db.execute(query);
}
