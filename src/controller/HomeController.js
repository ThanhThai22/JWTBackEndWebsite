const handleHelloWorld = (req, res) => {
    // return res.send("Hello World!");
    const name = "Thanh Thai";
    return res.render("home.ejs", { name });
}

const handleAboutMe = (req, res) => {
    return res.send("I'm Thanh Thai");
}

const handleUserPage = (req, res) => {
    //model => get data from database
    return res.render("user.ejs");
}

module.exports = {
    handleHelloWorld,
    handleAboutMe,
    handleUserPage
}