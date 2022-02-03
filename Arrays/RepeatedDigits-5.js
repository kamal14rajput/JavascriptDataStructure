var lastNo,firstNo,sum;
var array=[];
for(var i=0;i<100;i++){
    lastNo=i%10;
    firstNo=Math.floor(i/10);
    sum=lastNo*10+firstNo;
    if(sum===i){
        array.push(i);;
    }
}
console.log(array);