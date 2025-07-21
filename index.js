import express from 'express';
const app = express();

app.use(express.json());

const users = []

// Metodo => GET, POST, PUT/PATCH, DELETE
// NAME => / - sempre no plural
// Calback functions => Onde executamos o backend (lógica, regra de negócio)

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).send("usuario criado com sucesso");
});

app.get("/users", (req, res) => {
    res.send({message: "Essa são os users", users})
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});