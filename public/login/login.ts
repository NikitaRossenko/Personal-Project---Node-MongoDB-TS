function handleLogin(e:any){
    try {
        e.preventDefault()

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (!username || !password) throw new Error("Please enter The Username & Password")
        const userDetails = {username,password}

        fetch("/login", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(userDetails)

        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }
}