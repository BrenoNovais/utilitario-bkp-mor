import { Router } from "express";

export const Routes = Router()

Routes.get("/", (req, res) => {
    return res.send("Funcionando!")
})

export default Routes