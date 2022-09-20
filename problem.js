let num=11;

let factor=0
for(let i=2; i<num; i++){
    if(num%i==0){
        factor++
    }
}
if(factor==0){
 console.log("Prime")
}else{
    console.log("Not Prime")
}
