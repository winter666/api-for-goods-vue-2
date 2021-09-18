const express = require('express')
const app = express()
const CORS = require('./middleware/api/cors');
const apiRoutes = require('./routes/api');
const port = 9000


app.use(express.json())

app.use(CORS.handle)
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})