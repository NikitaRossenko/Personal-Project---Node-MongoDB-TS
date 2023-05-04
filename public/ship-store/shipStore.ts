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
    try {
        const videoContainer:any = document.querySelector(".video_container")
        const sliderContainer:any = document.querySelector(".sliderContainer")
        if (videoContainer && sliderContainer){
            videoContainer.remove()
    
            sliderContainer.style.display = "flex"
        }
    } catch (error) {
        console.error(error)
    }
}

function openAddDialog() {
    try {
        const body = document.querySelector('body')

        if (!body) throw new Error("body Error!")

        body.insertAdjacentHTML("beforeend", '<div class="addStarshipContainer"><div class="addStarshipSubContainer"><form onsubmit=addStarship(event)><input class="input" required type="text" name="itemName" placeholder="Starship Name"><input class="input" required type="text" name="itemModel" placeholder="Starship Model"><input class="input" required type="number" name="itemPrice" placeholder="Starship Price"><input class="input" required type="text" name="starshipDescription" placeholder="Starship Description"><input type="submit" value="Add"></form></div></div>')
    } catch (error) {
        console.error(error)
    }
}

function addStarship(e:any){
    try {
        e.preventDefault();

        const starshipName = e.target.elements.itemName.value;
        const starshipModel = e.target.elements.itemModel.value;
        const starshipPrice = e.target.elements.itemPrice.value;
        const starshipDescription = e.target.elements.starshipDescription.value;
        const carouselInner = document.querySelector(".carousel-inner")
        if (!carouselInner) throw new Error("Carousel Error!")
        if (!starshipName || !starshipModel || !starshipPrice || !starshipDescription) throw new Error("Please fill all the feilds!")

        const newStarship:any = { starshipName , starshipModel, starshipPrice, starshipDescription }

        fetch("/api/v1.0/items/add-starship", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newStarship),

        })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok === true){
                const addStarshipContainer = document.querySelector(".addStarshipContainer")
                if (!addStarshipContainer) throw new Error("addStarshipContainer Error!")
                addStarshipContainer.remove()
                renderStarships()
            } else {
                console.error("Couldn't add item")
            }
        })
        .catch((error) => {
            console.log(error)
        })


    } catch (error) {
        console.error(error)
    }
}

async function renderStarships() {

    const response = await fetch("/api/v1.0/items/get-starship");
    const data = await response.json()

    if(data.ok === true) {
        console.log(data.starships)
    }
}

// function addToCart(){
//     try {
//         fetch("/api/v1.0/cart/add-item", {
//             method:"POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body:JSON.stringify(itemId),

//         })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.ok === true){
//                 location.href = "login.html"
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         }))
        
//     } catch (error) {
//         console.error(error)
//     }

// }
