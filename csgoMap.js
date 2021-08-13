let csData = require("./dataset")

let getData = (name)=>{

    for(var i = 0;i<csData.cs.length;i++)
    {
        if(csData.cs[i].Map === name)
        {
            console.log(csData.cs[i]);
        }
}
}

getData("Mirage");