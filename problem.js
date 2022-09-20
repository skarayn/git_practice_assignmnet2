let num=11;

let fac=0
for(let i=0; i<num; i++){
    if(num%i==0){
        fac++
    }
}
if(fac!=2){
 console.log("Prime")
}else{
    console.log("Not Prime")
}