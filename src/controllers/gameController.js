const services= require("../services/gameServices");
exports.addAgents=async(req,res)=>{
    
    const agentInfo=await services.storeAgents();
    const matchInfo=await services.storeMatches();
    res.status(201).send({agents:agentInfo,matches:matchInfo,sucess:true});
}
exports.checkAssociation=async(req,res)=>{
    const result=await services.getBoth();
    res.send(result);
}
