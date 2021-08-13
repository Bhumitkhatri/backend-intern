let csData = require("./dataset")

let getData = ()=>{
    var count = 0;

    for(var i = 0;i<csData.cs.length;i++)
    {
        if(csData.cs[i].Rank_1 >52)
        {
            count = count + 1;
        }
    }
    var percentage = count/(csData.cs.length);

    console.log(100-percentage);
}

getData("Mirage");