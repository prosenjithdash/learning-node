const express = require('express')
 // creating an express instance
const app = express()


const port = 3000

app.get('/', (req, res) => {
    res.json(
        {
            name: 'Bappu',
            age: '22'
        }
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port 3000`)
})