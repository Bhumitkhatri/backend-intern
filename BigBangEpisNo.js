let fetch = require('node-fetch');
let getData = (ids) =>{

fetch("https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")

.then( (get)=>{
    return get.json();
} )
.then( (data) =>{
    for (index = 0; index < ids.length; index++) {
    let episodeDetails = data._embedded.episodes.find( (element)  => {
        return element.id === ids[index]
})
if (episodeDetails){
    console.log(episodeDetails);
}else {
    console.log("Incorrect input");
}

    }

} ).catch( () =>{
    console.log("Unable to fetch data from file");
} );


}

let ids = [2914,2915,2916];
getData(ids);
