module.exports = function countAllPaarl(regNo){
    const arrRegNo=regNo.split(",");
    const regNoForPaarl=[];
  for (let i=0; i < arrRegNo.length;i++){
    let regNo=arrRegNo[i].trim();
    if (regNo.startsWith("CJ")){
      regNoForPaarl.push(regNo);
    }
   }
    return regNoForPaarl.length;
  };