//Ensure Users Exist

var currentUser;

document.querySelector('body').onload = () => {
    if (!localStorage.getItem('Users') || !sessionStorage.getItem('CurrentUser')) {
        localStorage.setItem('Users', JSON.stringify([]))
        location.href = './index.html'
    }


    //Setup the sidebar profile data
    currentUser = new newSession(
        JSON.parse(sessionStorage.getItem('CurrentUser'))
    )

    let setDetails = () => {
        let name = document.querySelector('.details.name')
        let username = document.querySelector('.details.username')
        let password = document.querySelector('.details.password')
        let profilePic = document.querySelector('.profile .current-profile-pic')
        let noOfTests = document.querySelector('.info .no-of-tests-taken')
        let currentAggregate = document.querySelector('.info .current-aggregate')
        let currentLevel = document.querySelector('.info .current-level')

        //Setting data
        name.innerText = currentUser.name
        username.innerText = currentUser.username
        password.innerText = currentUser.password
        profilePic.src = currentUser.profilePic

        noOfTests.innerText = currentUser.numberOfTests
        currentAggregate.innerText = currentUser.currentAggregate
        currentLevel.innerText = currentUser.currentLevel
    }

    let settings = () => {

        let myProfile = document.querySelector('.sidebar .settings .my-profile-link')
        let takeTest = document.querySelector('.sidebar .settings .take-a-test-link')
        let logOut = document.querySelector('.sidebar .settings .log-out-link')

        myProfile.onclick = () => {
            if (location.href.includes('quiz')) {
                let reply = confirm("Do you want to quit current quiz?")

                if (!reply) {
                    return
                }
            }

            location.href = "./profile.html"
        }

        takeTest.onclick = () => {
            if (location.href.includes('quiz')) {
                let reply = confirm("Do you want to quit current quiz?")

                if (!reply) {
                    return
                }
            }

            location.href = "./quiz.html"
        }

        logOut.onclick = () => {
            if (location.href.includes('quiz')) {
                let reply = confirm("Do you want to quit current quiz?")

                if (!reply) {
                    return
                }
            }

            location.href = "./index.html"
        }

    }

    let profileSetup = () => {
        let testsContainer = document.querySelector('.previous-tests-container')
        let level = document.querySelector('.profile-area-container .level')
        let noOfTests = document.querySelector('.profile-area-container .tests-taken')

        if (currentUser.Tests.length == 0 || currentUser == null) {
            return
        }

        testsContainer.innerHTML = ''
        for (const test of currentUser.Tests) {
            testsContainer.innerHTML +=
                `
                    <div class="prev-test">
                        <div class="score">
                            <span class="big">${test.score}</span>
                            <span class="small">/20</span>
                        </div>

                        <div class="date">${test.date}</div>
                    </div>
                `
        }

        level.innerText = currentUser.currentLevel
        noOfTests.innerText = currentUser.numberOfTests
    }


    //Run functions
    setDetails()
    settings()

    if (location.href.includes('profile')) {
        profileSetup()
    }
}
