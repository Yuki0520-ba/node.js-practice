
//hello world 出力
//console.log("hello world!");



//コールバック関数を用いたノンブロッキング処理

setTimeout(function(){
    console.log("hello");
},1000);

console.log("world");


//コールバック関数を使わない例
/*
var start=new Date().getTime();
console.log(start);     
while(new Date().getTime()<start+1000);
console.log("world");
*/


