const db=require('../models');
const axios = require('axios');
exports.storeAgents=async()=>{
    const agentInfo=await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
    const agentDetails= agentInfo.data.data.map((item)=>{
        return {"name":item.displayName,"ability1":item.abilities[0].displayName,"ability2":item.abilities[1].displayName};
    });
    
    const result=await db.Agent.bulkCreate(agentDetails);
    return result;

}
exports.storeMatches=async()=>{
    const matchInfo=await axios.get('https://promit-revar.github.io/db.json');
    const matchDetails= matchInfo.data.map((item)=>{
        return {"playerName":item.playerName,"playerTag":item.playerTag,"agentName":item.agentPlayed,"gunKills":item.gunKills,"abilityOneKills":item.abilityImpact[0].kills,"abilityTwoKills":item.abilityImpact[1].kills};
    });
    const result=await db.Match.bulkCreate(matchDetails);
    return result;
}
exports.getBoth=async()=>{
    return await db.Agent.findAll({
        include:db.Match
    });
}