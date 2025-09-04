import express from "express";
import router from "./routes/router.js";
import db from "./Database/Database.js";

const app = express();

// Middleware para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/", router);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
