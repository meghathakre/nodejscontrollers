const stuInfo=(req,res)=>{
    res.send("this is student page!!");
}
const stuFees=(req,res)=>{
    res.send("this is student Fees!!");
}
const stuResult=(req,res)=>{
    res.send("this is student result!!");
}
const stusbuject=(req,res)=>{
    res.send("this is student subject page!!");
}
module.exports={
    stuInfo,
    stuFees,
    stuResult,
    stusbuject
}