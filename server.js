const app = require('./src/app')
const port = process.env.PORT
//Seting up server listening
app.listen(port, () => console.log(`Hotel-Management-Application running on port ${port}`) )