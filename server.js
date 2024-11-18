import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão");
});

