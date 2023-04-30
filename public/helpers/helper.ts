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

sentensesSlide();