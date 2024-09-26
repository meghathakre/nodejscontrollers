const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.get("/stuInfo",stuController.stuInfo);
route.get("/stuFees",stuController.stuFees);
route.get("/stuResult",stuController.stuResult);

route.get("/stusubject",stuController.stusbuject);


module.exports=route;