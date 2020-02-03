//モジュール読み込む
var http=require('http');
var fs=require('fs');
//サーバーたてる
var server = http.createServer();
//settings.js読み込み
var settings=require('./settings');
//リクエスト発生時
server.on('request',function(req,res){
    //htmlファイルを読み込む
    fs.readFile(__dirname+'/public_html/hello.html','utf-8',function(err,data){
        //エラーの場合
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write('not found');
            res.end();
        }


        //読み込んだhtmlファイルを表示
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    } )

    
   
});

//サーバー待ち状態にする
server.listen(settings.post);
console.log("server listenning...");


