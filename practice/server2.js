//モジュール読み込む
var http=require('http');
var fs=require('fs');
//サーバーたてる
var server = http.createServer();
//settings.js読み込み
var settings=require('./settings');
//リクエスト発生時
server.on('request',function(req,res){ 
    switch(req.url){
        case '/about':
            msg='about this page';
            break;
        case '/profile':
            msg='about me';
            break;
        default:
            msg='wrong page';
            break;
    }
    res.writeHead(200,{'Content-Type':'text/plain'});
            res.write(msg);
            res.end();
    
   
});

//サーバー待ち状態にする
server.listen(settings.post);
console.log("server listenning...");


