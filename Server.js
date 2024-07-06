const app = require('./App');
const mongoose = require('mongoose');
const {MONGODB_URI,PORT}=require('./config')


mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected Sucessfully..')
    })
    .catch((e) => {
    console.log(e)
    })

app.listen(PORT, () => {
        console.log(`Server Listening to the Port is ${PORT}`)
    })