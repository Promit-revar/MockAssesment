const router=require("express").Router();
const {addAgents,checkAssociation} = require("../controllers/gameController");
router.get('/create',addAgents);
router.get('/',checkAssociation)
module.exports=router;