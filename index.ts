import cors from 'cors'
import express from 'express'
import 'dotenv/config';
import { fetchImgurGallery } from './imgurServices';

const app = express()
app.use(cors({}))
app.use(express.json())
app.use(express.static('public'))

const http =require('http')
const path =  '0.0.0.0'
const port = 4000
app.get('/', async(req, res)=>{
    res.send(`server up and running : ${[path]}`)
})


app.post('/data/:popularity/:sort/:period', async (req, res) => {
    const {popularity , sort ,period} =req.params
    const{itemsPerPage , currentPage } = req.body
    
    try {
        const data = await fetchImgurGallery(popularity, sort, period);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const totalPages = data && data.length / itemsPerPage;
        const currentItems = data && data.slice(startIndex, endIndex);

    res.status(200).send({currentItems , totalPages});
  } catch (error) {
    //@ts-ignore
    res.status(400).send({ error: error.message });
  }
});


app.listen(port,  ()=>{
    console.log(path)
})