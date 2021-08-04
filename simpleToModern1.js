let checkLogin = (email,password,allUsers) =>{
    let isUserFound = false
    let passwordCorrect = false

    for (currentUser in allUsers) {

      console.log(currentUser)

      if (allUsers[currentUsers]['email'] == email) {

        if (allUsers[currentUsers]['password'] == password) {
           isUserFound = true
           passwordCorrect = true
           break
        } else {
          isUserFound = true
          passwordCorrect = false
          break
        }

      } else {
        isUserFound = false
      }
    }

    if (isUserFound == true && passwordCorrect == true) {
      console.log(' You are logged in')
    } else if (isUserFound == true && passwordCorrect == false) {
      console.log('You have provided incorrect password')
    } else {
      console.log('No user with this email found')
    }
}