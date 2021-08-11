let csgoData =  (csv) =>{

    const fs = require("fs");
    csv = fs.readFileSync(csv)
    let lines=csv.toString().split("\n");

    let result = [];
    let headers=lines[0].split(",");
    for(let i=1;i<lines.length;i++){
  
        let obj = {};
        let currentLine=lines[i].split(",");
  
        for(let j=0;j<headers.length;j++){
            obj[headers[j]] = currentLine[j];
        }
  
        result.push(obj);

    }
        let json = JSON.stringify(result);
    fs.writeFileSync('output1.json', json);
  }

csgoData("results.csv")