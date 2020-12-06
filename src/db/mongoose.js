const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://riyaz:alhamdulillah@cluster0.j9vpm.mongodb.net/hotel-management-application', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})