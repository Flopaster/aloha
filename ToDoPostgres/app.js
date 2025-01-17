import express from 'express'
import { createToDo , getALLToDos, deleteToDo,changeStatus} from './db.js'
import cors from 'cors'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173']}))

app.get('/todo', async (req, res) => {
    const result = await getALLToDos()
    res.send(result.rows)
     
})

app.post('/todo', async (req, res) => {
    const result = await createToDo(req.body)
    res.send(result.rows)
})

app.delete('/todo/:id', async (req, res) => {
    const result = await deleteToDo(req.params.id)
    res.send(result)
})

app.patch('/todo/:id', async (req, res) => {
    const result = await changeStatus(req.params.id)
    res.send(result)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})