import express from "express";
const app = express();
const serverPort = 5000;
import moongose from "mongoose"

// Routes Import
import loginRouter from "./API/routes/loginRoutes/loginRoute"
import registerRouter from "./API/routes/registerRoutes/registerRoute"

app.use(express.static("public/index"))
app.use(express.static("public/login"))
app.use(express.static("public/register"))

// Routes Use
app.use("api/users/", loginRouter)
app.use("api/users/", registerRouter)

app.listen(serverPort, () => {
    console.log(`Server started at port ${serverPort}`)
})