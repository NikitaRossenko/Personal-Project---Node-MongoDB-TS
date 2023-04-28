function checkLoggedIn() {
    var userInfo = { username: 'Nikita', uid: '23749273dbn2n3u2n329c' };
    // document.cookie = `isLoggedIn1=${JSON.stringify(userInfo)}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
    var cookies = document.cookie;
    if (cookies) {
        var cookiesList = cookies.split(";");
        var loggedInCookie = {};
        for (var cookieIndex in cookiesList) {
            if (cookiesList[cookieIndex].split("=")[0].trim() === "isLoggedIn") {
                var isLoggedIn = JSON.parse(cookiesList[cookieIndex].split("=")[1]);
                loggedInCookie = { isLoggedIn: isLoggedIn };
            }
        }
        console.log(loggedInCookie, cookiesList);
        if (!loggedInCookie) {
            console.log("Not logged in!");
            location.href = "login.html";
        }
    }
    else {
        console.log("Not logged in!");
        location.href = "login.html";
    }
}
