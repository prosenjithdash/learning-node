const express = require('express')
 // creating an express instance
const app = express()

app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


// post data to MongoDB
app.post('/create-post', async (req, res) => {
    const result = await postCollection.insertOne(req.body);

    res.json({
        message: 'Post created successfully !',
        data: result,
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port 3000`)
})