let UsersAddress = []
let storeUserAddress = (userId,...addressToStore) =>{
   console.log(userId)
    console.log(addressToStore)

}

let firstAddress = {
    "HouseNo.":"253B",
    "Sector":"32",
    "city":"Gurgaon",
    "state":"HR",
    "pincode":"122001",
    "country":"India"
}

let secondAddress = {
    "HouseNo.":"254",
    "Sector":"36",
    "city":"Gurgaon",
    "state":"HR",
    "pincode":"122001",
    "country":"India"
}

storeUserAddress("RahulKumar2212",firstAddress,secondAddress)