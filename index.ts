import express, { Request, Response } from 'express'

const server = express()

server.get('/', (request: Request, response: Response) => {
    return response.json({msg: 'Hello world'})
})

server.listen(5000, () => {
    console.log('Servidor on at port 5000 http://localhost:5000/')
})