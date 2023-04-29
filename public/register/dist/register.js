function handleRegister(e) {
    try {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if (!username || !password)
            throw new Error("Please enter The Username & Password");
        var userDetails = { username: username, password: password };
        fetch("/api/v1.0/users/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok === true) {
                location.href = "login.html";
            }
        })["catch"](function (error) {
            console.log(error);
        });
    }
    catch (error) {
        console.log(error);
    }
}
