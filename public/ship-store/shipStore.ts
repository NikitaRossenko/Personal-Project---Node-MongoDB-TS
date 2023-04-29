async function checkLoggedIn() {
    try {
        await fetch("/api/v1.0/users/check-logged-in")
            .then((res) => res.json())
            .then((data) => {
                if (data.ok === false){
                    location.href = "/login.html"
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

function openShop(){
    const videoContainer:any = document.querySelector(".video_container")
    const sliderContainer:any = document.querySelector(".sliderContainer")
    if (videoContainer && sliderContainer){
        videoContainer.remove()

        sliderContainer.style.display = "flex"
    }
}
