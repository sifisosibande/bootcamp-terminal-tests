module.exports = function countAllFromTown(strRegNo,townLocation){
    const TownRegNo=[];
   strRegNo=strRegNo.split(",");
  for (let i=0; i < strRegNo.length;i++){
    let regNo=strRegNo[i].trim();
    if (regNo.startsWith(townLocation)){
      TownRegNo.push(regNo);
    };
   };
    console.log(TownRegNo)
    return TownRegNo.length;
  };