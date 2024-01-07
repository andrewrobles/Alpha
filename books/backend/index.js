import express from 'express'
import mongoose from 'mongoose'
import { PORT, mongoDBURL } from './config.js'

const app = express()

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome To MERN Stack')
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})

console.log('MONGO DB URL')
console.log(mongoDBURL)

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })
}) 
.catch((error) => {
    console.log(error)
})