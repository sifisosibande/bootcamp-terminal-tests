export default function yearsAgo(year){
    const date1 = new Date();
    
    
    return (date1.getFullYear() - year);
  }