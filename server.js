import express from "express";

const posts = [
    {
        id: 1,
      descricao: "Uma foto teste",
      imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 2,
      descricao: "Gato adorável se espreguiçando no sol",
      imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 3,
      descricao: "Gatinho curioso explorando uma caixa",
      imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 4,
      descricao: "Dois gatos brincando com um novelo de lã",
      imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 5,
      descricao: "Gato preto elegante posando para a câmera",
      imagem: "http://placecats.com/millie/300/150"
    },
    {
        id: 6,
      descricao: "Gatinho ronronando no colo",
      imagem: "http://placecats.com/millie/300/150"
    }
  ];

const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, () => {
    console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});