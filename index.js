const express=require('express');
const app=express();
const routes=require("./src/routes/route");
//middleware...
app.use(express.json());
app.use(routes)
app.listen(8000,()=>console.log("Server running on port 8000"));