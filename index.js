const dir = 'E:/アニメ';

const fs = require('fs');
let dirList = fs.readdirSync(dir);
for(let i=0;i<dirList.length;i++){
  let fileList = fs.readdirSync(`${dir}/${dirList[i]}`);
  for(let ii=0;ii<fileList.length;ii++){
    let name = fileList[ii];
    name = name.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    if(name.match(/(第|\s|#|Step|その)\d\D/)){
      let tmp = name.match(/(第|\s|#|Step|その)\d\D/)[0]
      tmp = tmp.replace(/\d/,`0${tmp.match(/\d/)[0]}`)
      name = name.replace(/(第|\s|#|Step|その)\d\D/,tmp);
    }
    fs.rename(`${dir}/${dirList[i]}/${fileList[ii]}`,`${dir}/${dirList[i]}/${name}`);
  }
}

