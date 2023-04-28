function checkLoggedIn() {
    const userInfo = {username:'Nikita', uid:'23749273dbn2n3u2n329c'}
    // document.cookie = `isLoggedIn1=${JSON.stringify(userInfo)}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
    const cookies = document.cookie
    if (cookies){
        const cookiesList = cookies.split(";")
        let loggedInCookie = {}
    
        for (let cookieIndex in cookiesList) {
            if (cookiesList[cookieIndex].split("=")[0].trim() === "isLoggedIn") {
                const isLoggedIn = JSON.parse(cookiesList[cookieIndex].split("=")[1])
                loggedInCookie = {isLoggedIn}
            }
        }
        console.log(loggedInCookie,cookiesList)
        if (!loggedInCookie){
            console.log("Not logged in!")
            location.href = "login.html"
        }
    } else {
        console.log("Not logged in!")
        location.href = "login.html"
    }

}
