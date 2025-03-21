var currentUser;

//Profile Class Declaration
class newProfile {
    constructor(name, username, password, profilePic) {
        this.name = name
        this.username = username
        this.password = password
        this.profilePic = profilePic

        this.numberOfTests = 0
        this.currentScore = 0
        this.currentAggregate = 0
        this.currentLevel = "Rookie"

        //Setting the Id
        if (localStorage.getItem("genericId")) {
            this.id = JSON.parse(localStorage.getItem('genericId')) + 1
        } else {
            this.id = 1
        }

        localStorage.setItem('genericId', this.id)

        this.Tests = []
    }
}

class newSession {
    constructor(options = {}) {
        Object.assign(this, options)
    }

    testUpdate(chosenQuestions) {

        let testScore = this.scorer(chosenQuestions)
        let testDate = this.dateTaken()

        this.Tests.push({
            score: testScore,
            date: testDate,
            questions: [...chosenQuestions]
        })

        this.numberOfTests++
        this.currentScore += testScore
        this.currentLevel = this.userLevel()
        this.currentAggregate = this.getAggregate()

        this.upload()

    }

    getAggregate() {
        return `${this.currentScore}/${this.numberOfTests * 20}`
    }

    userLevel() {
        if (this.numberOfTests <= 1) {
            return "Rookie"
        } else if (this.numberOfTests < 5) {
            return "Novice"
        } else if (this.numberOfTests < 10) {
            return "Intermediate"
        } else {
            return "Master"
        }
    }

    scorer(chosenQuestions) {
        let newArray = [...chosenQuestions]
        let score = 0

        //get the score
        for (const question of newArray) {
            if (question.chosenAnswer == question.Answer) {
                score++
            }
        }

        score = score * 2

        return score
    }

    dateTaken() {
        let d = new Date()
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return `${days[d.getDay()].slice(0, 3)} ${d.getDate()} ${months[d.getMonth()].slice(0, 3)}`
    }

    upload() {
        sessionStorage.setItem('CurrentUser', JSON.stringify(this))

        let Users = JSON.parse(localStorage.getItem('Users'))
        for (const user of Users) {
            if (user.id == this.id) {
                Users[Users.indexOf(user)] = this
            }
        }

        localStorage.setItem('Users', JSON.stringify(Users))
    }
}




// Data Collection