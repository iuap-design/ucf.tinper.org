// 移动 tinper_hdewp6 到 static 目录下
// 替换html 移动 static/index.html  到 static/tinper_hdewp6 目录下
const exec = require('child_process').exec;

async function cpDocs(item){
    let cmd = `cp -r ./tinper_hdewp6 ./static/tinper_hdewp6` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ cp第一步出错了！`)
            console.log(error);
        }else{
            let cmd2 = 'cp ./static/index.html ./static/tinper_hdewp6'
            exec(cmd2,(error)=>{
                if(error){
                    console.log(`❌❌❌❌❌❌❌❌  cp第二步出错了！`)
                    console.log(error);
                }else{
                    let cmd3 = 'cp -r ./tinper_hdewp6/data ./static/data'
                    exec(cmd3,(error)=>{
                        if(error){
                            console.log(`❌❌❌❌❌❌❌❌  cp第三步出错了！`)
                            console.log(error);
                        }else{
                           console.log('所有文件处理完成')
                        }
                    })
                }
            })
        }
    })
}

cpDocs()