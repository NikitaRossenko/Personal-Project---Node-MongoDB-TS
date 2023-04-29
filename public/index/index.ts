async function checkLoggedInStore() {
    try {
        await fetch("/api/v1.0/users/check-logged-in")
            .then((res) => res.json())
            .then((data) => {
                if (data.ok === false){
                    location.href = "/login.html"
                } else {
                    location.href = "/"
                }
            });
    } catch (error) {
        console.log(error);
    }
}
async function checkLoggedIn() {
    try {
        await fetch("/api/v1.0/users/check-logged-in")
            .then((res) => res.json())
            .then((data) => {
                if (data.ok === false){
                    const loginLogoutBtn:any = document.querySelector("#loginLogoutBtn")
                    if (loginLogoutBtn){
                        loginLogoutBtn.innerText = "Login"
                        loginLogoutBtn.setAttribute("onlick", "login()")
                        loginLogoutBtn.setAttribute("href", "login.html")
                    }
                } else {
                    const loginLogoutBtn:any = document.querySelector("#loginLogoutBtn")
                    const username:any = document.querySelector("#username")
                    if (loginLogoutBtn && username){
                        username.innerText = data.user
                        loginLogoutBtn.innerText = "Logout"
                        loginLogoutBtn.setAttribute("onclick", "logout()")
                    }
                }
            });
    } catch (error) {
        console.log(error);
    }
}

function login() {
    console.log("login")
    location.href = "login.html"
}
async function logout() {
    console.log("logout")
    try {
        await fetch("/api/v1.0/users/logout")
            .then((res) => res.json())
            .then((data) => {
                if (data.ok === true){
                    location.href = "/"
                } else {
                    throw new Error("Something went wrong!")
                }
            });
    } catch (error) {
        console.log(error);
    }
}

let index = 0
function sentensesSlide() {
    const sentenses:any = document.querySelectorAll(".sentensesSlide")
    for (let i = 0 ; i<sentenses.length ; i++){
        sentenses[i].style.display = "none"
    }
    index++;

    if (index > sentenses.length) {index = 1}
    sentenses[index-1].style.display = "block"
    setTimeout(sentensesSlide, 9000)

}

function randomNumberColors(){
    const numbers:any = document.querySelectorAll(".number")

    for (let i = 0 ; i < numbers.length ; i++){
        numbers[i].style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
}

randomNumberColors();
sentensesSlide();