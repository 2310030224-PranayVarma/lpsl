    import express from 'express'
    import {getlpsl} from "./App.js"
    const app = express()
    const port = 3000
    app.get('/', (req, res) => {
    res.send('Hello World')
    })
    app.get('/lpsl',(req,res)=>{
        const {s} = req.query;
        if(!s)
            return res.send("Please provide a valid string")
        const ans  = getlpsl(s);
        return res.send(ans)
    })

    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
    })