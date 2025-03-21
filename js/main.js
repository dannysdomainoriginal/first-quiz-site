//Modal
openModal = (id) => {document.getElementById(id).style.display = "grid"}
closeModal = (id) => { document.getElementById(id).style.display = "none" }

document.querySelector('.close-btn').onclick = () => closeModal("modal")
document.querySelector('.signin-modal').onclick = () => openModal("modal")

document.querySelector('.close-btn-login').onclick = () => closeModal("modal3")
document.querySelector('.login-modal').onclick = () => openModal("modal3")
document.querySelector('.check-results').onclick = () => openModal("modal3")

//Switch Between
let switches = document.querySelectorAll('.switch')
switches.forEach(element => {
    element.onclick = (e) => { 

        if (e.target.classList.contains('to-login')) {
            closeModal('modal')
            openModal('modal3')
        } else if (e.target.classList.contains('to-signin')){
            closeModal('modal3')
            openModal('modal')
        }
    }
});

//Modal2 Show & Hide
document.querySelector('.modal-two').onclick = () => openModal('modal2')
document.querySelector('#modal2').onclick = (e) => {
    if (e.target != document.querySelector('.library-modal') && e.target.parentNode != document.querySelector('.library-modal')) {

        console.log(e.target, e.target.parentNode)
        closeModal('modal2')
    }
}

//Upload Image
let profilePic = document.getElementById('profile-pic')
let inputFile = document.getElementById('input-file')

inputFile.onchange = async () => {

    let [file] = inputFile.files

    const reader = new FileReader()
    reader.onload = (e) => {
        profilePic.src = e.target.result
    }

    reader.onerror = (err) => {
        console.error("Error reading file:", err)
        alert('An error occured while reading file')
    }

    reader.readAsDataURL(file)

}

//Choose From Library
let library = document.querySelectorAll('.library-modal img')
library.forEach(img => {
    img.onclick = (e) => {
        profilePic.src = e.target.src
        closeModal('modal2')
    }
});


//SignUp
signUpForm = document.querySelector('.signup-form')

signUpForm.onsubmit = (e) => {
    e.preventDefault()
    e.stopPropagation() 

    let details = document.querySelectorAll('.signup-form input')
    details = [...details].map(item => item.value)
    details.push(profilePic.src)


    //Profile Creation
    profileCreation = () => {
        currentUser = new newProfile(
            details[0],
            details[1],
            details[2],
            details[3]
        )

        sessionStorage.setItem('CurrentUser', JSON.stringify(currentUser))
        let Users = JSON.parse(localStorage.getItem('Users'))
        Users.push(currentUser)
        localStorage.setItem('Users', JSON.stringify(Users))
    }


    nullPass = (value) => {
        if (value == "" || value == null) {
            return false
        }

        return true
    }

    if (details.some(nullPass)) {

        if(!localStorage.getItem("User")){
            localStorage.setItem("Users", JSON.stringify([]))
        }

        let Users = JSON.parse(localStorage.getItem('Users'))

        let usedUserNames = Users.map((item) => {
            return item.username
        })

        if (usedUserNames.includes(details[1])) {
            alert('User name already exists')
        } else {
            profileCreation()

            //Test begins
            location.href = './quiz.html'
        }
        
    } else {
        alert('All inputs are required')
    }
}

//LogIn
loginForm = document.querySelector('.login-form')
let userEntry = document.querySelector('.login-form .user-entry')
let pic = document.getElementById('profile-pic2')

userEntry.onchange = (e) => {
    let Users = JSON.parse(localStorage.getItem('Users'))
    

    pic.src = Users.filter((item) => {return item.username == e.target.value})[0].profilePic

    console.log(Users.map((item)=>{return item.username}), e.target.value)
    console.log(Users.filter((item) => { return item.username == e.target.value }))
}


loginForm.onsubmit = (e) => {

    e.preventDefault()
    e.stopPropagation()
    
    let details = document.querySelectorAll('.login-form input')
    details = [...details].map(item => item.value)

    let Users = JSON.parse(localStorage.getItem('Users'))
    console.log(Users)
    let answer = Users.some((item) => {
        if (item.name != details[0]) {
            return "Name is invalid"
        } else if(item.username != details[1]){
            return "Username is invalid"
        } else if (item.password != details[2]) {
            return "Password is invalid"
        }

        return "Log In Successful"
    })

    alert(answer)

    currentUser = Users.find((item) => {
        return item.name == details[0] && item.username == details[1] && item.password == details[2]
    })

    console.log(currentUser)

    currentUser = new newSession(currentUser)
    console.log(currentUser)
    sessionStorage.setItem('CurrentUser', JSON.stringify(currentUser))
    
    location.href = './profile.html'
}