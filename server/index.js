const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Test user:
//{name: 'test', email: 'test@gmail.com', password: 'Haslo123$'}

app.use(express.json());
app.use(cors());

const userRoute = require("./Routes/userRoute")
const chatRoute = require("./Routes/chatRoute")
const messageRoute = require("./Routes/messageRoute")



const port = process.env.port || 3000;
const uri = process.env.ATLAS_URI;



app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);



app.get("/", (req,res)=>{
    res.send("Testing chat API");
})

app.listen(port, (req, res)=>{
    console.log(`Server running on port ${port}!`);
});

mongoose
    .connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connection Estabilished Successfuly"))
    .catch((error) => console.log("MongoDB Connection failed: ", error.message))




app.get('/', (req, res) => res.send('Hello World!'))

