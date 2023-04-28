export const login = (res:any, req:any) => {
    const {username, password} = req.body;
    console.log(username, password)
}