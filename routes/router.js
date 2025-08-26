import { express } from "express";

let router = express.router();

router.get(
    "/", function(req, res){
        console.log("Hi")
        res. status(200).json({message: "Hi"})
    }
)

export default router;
