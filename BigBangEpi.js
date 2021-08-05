let fetch = require('node-fetch');

let getData = (name) =>{

fetch("https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")

.then( (res)=>{
    return res.json();
} )
.then( (data) =>{
    console.log("function starts");
    const episodeDetails = data._embedded.episodes.find( (element)  => {
        return element.name === name
})
if (episodeDetails){
    console.log(episodeDetails);
}else {
    console.log("incorrect input");
}

} ).catch( () =>{
    console.log("Unable to fetch data from file");
} );


}

getData("The Big Bran Hypothesis");