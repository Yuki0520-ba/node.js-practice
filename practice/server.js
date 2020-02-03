//モジュール読み込む
var http=require('http');
var fs=require('fs');
var ejs=require('ejs ');

//サーバーたてる
var server = http.createServer();

//テンプレート読み込み　同期処理である 
var template=fs.readFileSync(__dirname+'/public_html/hello_ejs.html','utf-8'); 
//settings.js読み込み
var settings=require('./settings');

var n=0
//リクエスト発生時
server.on('request',function(req,res){
        n++;
        //テンプレート内に変数代入
        var data=ejs.render(template,{
            title:'hello',
            content:'<strong>world!</strong>',
            n:n 
        })
        //読み込んだhtmlファイルを表示
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });


    //渡ってきたurlによって表示変える
    /*  
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
    */
   


//サーバー待ち状態にする
server.listen(settings.post);
console.log("server listenning...");


