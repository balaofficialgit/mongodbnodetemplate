const {connect,model,Schema} = require("mongoose");

const userschema = new Schema({
    name:{ type: String,},
    phone:{ type: String,},
    address:{ type: String,},
});
const usermodel = model("Users",userschema);



const connectDB = async()=>{
    try {
        await connect(process.env.DBURL);
        console.log("DB connected successfully");
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    connectDB,
    usermodel
}


