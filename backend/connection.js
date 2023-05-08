const mongoose = require('mongoose');

const url ='mongodb+srv://Sairammau:sai5081611@cluster0.zmrirwx.mongodb.net/mydatabase?retryWrites=true&w=majority'


mongoose.connect(url)
.then((result) => {
    console.log('database connected')
    
}).catch((err) => {
    console.log(err);
    
});


module.exports=mongoose;