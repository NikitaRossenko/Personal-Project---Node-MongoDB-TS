function handleLogin(e) {
    try {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if (!username || !password)
            throw new Error("Please enter The Username & Password");
        var userDetails = { username: username, password: password };
        fetch("/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.log(error);
        });
    }
    catch (error) {
        console.log(error);
    }
}
