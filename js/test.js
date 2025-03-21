const QUESTIONLIBRARY =
    [
        {
            Question: "Who is the smartest anime character?",
            Id: 1,
            Opt1: "Light Yagami",
            Opt2: "Katagiri Yuichi",
            Opt3: "Ayanokouji Kiyotaka",
            Opt4: "L, Death Note",
            Answer: "Ayanokouji Kiyotaka"
        },

        {
            Question: "Who is the most popular anime character?",
            Id: 2,
            Opt1: "Kamado Tanjiro",
            Opt2: "Eren Yeager",
            Opt3: "Ayanokouji Kiyotaka",
            Opt4: "Light Yagami",
            Answer: "Eren Yeager"
        },

        {
            Question: "What is the most common programming language?",
            Id: 3,
            Opt1: "PHP",
            Opt2: "Javascript",
            Opt3: "C++",
            Opt4: "Java",
            Answer: "Javascript"
        },

        {
            Question: "Which of these is the most popular anime?",
            Id: 4,
            Opt1: "Attack On Titan",
            Opt2: "Demonslayer",
            Opt3: "My Hero Academia",
            Opt4: "Death Note",
            Answer: "Attack On Titan"
        },

        {
            Question: "What is the coolest job in the world?",
            Id: 5,
            Opt1: "Civil Engineer",
            Opt2: "Medical Doctor",
            Opt3: "Software Developer",
            Opt4: "Pilot",
            Answer: "Software Developer"
        },

        {
            Question: "What is the most profitable career path for a Software Developer?",
            Id: 6,
            Opt1: "Getting a 9-5",
            Opt2: "Working for a startup",
            Opt3: "Creating projects as a hobby",
            Opt4: "Building a SAAS application",
            Answer: "Building a SAAS application"
        },

        {
            Question: "What language makes up the skeleton of a website?",
            Id: 7,
            Opt1: "HTML",
            Opt2: "CSS",
            Opt3: "Javascript",
            Opt4: "Python",
            Answer: "HTML"
        },

        {
            Question: "Which of these is a backend framework for Nodejs?",
            Id: 8,
            Opt1: "Flask",
            Opt2: "Express",
            Opt3: "Django",
            Opt4: "Nextjs",
            Answer: "Express"
        },

        {
            Question: "What does CSS stand for?",
            Id: 9,
            Opt1: "Creative Style Sheets",
            Opt2: "Cascading Style Sheets",
            Opt3: "Computer Style Sheets",
            Opt4: "Custom Style Sheets",
            Answer: "Cascading Style Sheets"
        },

        {
            Question: "What language is used for adding dynamic functionality to pages?",
            Id: 10,
            Opt1: "Javascript",
            Opt2: "HTML",
            Opt3: "CSS",
            Opt4: "Django",
            Answer: "Javascript"
        },

        {
            Question: "Which of these is not a backend language?",
            Id: 11,
            Opt1: "PHP",
            Opt2: "Ruby",
            Opt3: "Java",
            Opt4: "Javascript",
            Answer: "Javascript"
        },

        {
            Question: "Which of these is not a frontend framework?",
            Id: 12,
            Opt1: "Reactjs",
            Opt2: "Vue",
            Opt3: "Django",
            Opt4: "Angular",
            Answer: "Django"
        },

        {
            Question: "Which of these is not included in the React Ecosystem?",
            Id: 13,
            Opt1: "Create React App",
            Opt2: "React Router",
            Opt3: "React Meta",
            Opt4: "Redux",
            Answer: "React Meta"
        },

        {
            Question: "What is the most vital tool in programming?",
            Id: 14,
            Opt1: "English Language",
            Opt2: "Integrated Developer Environment",
            Opt3: "Friends",
            Opt4: "Self Confidence",
            Answer: "Integrated Developer Environment"
        },

        {
            Question: "Which of these ways does not get you a girlfriend?",
            Id: 15,
            Opt1: "Meet up with a girl",
            Opt2: "Approach a girl",
            Opt3: "Ignore female species",
            Opt4: "Slide into her dms",
            Answer: "Ignore female species"
        },

        {
            Question: "Who is the smartest of the following?",
            Id: 16,
            Opt1: "Light Yagami",
            Opt2: "Charles Daniel",
            Opt3: "Ayanokouji Kiyotaka",
            Opt4: "L, Death Note",
            Answer: "Charles Daniel"
        },

        {
            Question: "Who is the strongest anime character in the entire verse?",
            Id: 17,
            Opt1: "Saitama",
            Opt2: "Goku",
            Opt3: "Vegeta",
            Opt4: "Ayanokouji Kiyotaka",
            Answer: "Saitama"
        },

        {
            Question: "Who is the smartest anime character in the entire verse?",
            Id: 18,
            Opt1: "Light Yagami",
            Opt2: "Katagiri Yuichi",
            Opt3: "Ayanokouji Kiyotaka",
            Opt4: "L, Death Note",
            Answer: "Ayanokouji Kiyotaka"
        },

        {
            Question: "Who is the strongest character out of the following?",
            Id: 19,
            Opt1: "Homelander",
            Opt2: "Superman",
            Opt3: "Omni-man",
            Opt4: "Thor",
            Answer: "Omni-man"
        },

        {
            Question: "What is the first step to being a web developer?",
            Id: 20,
            Opt1: "Surfing the web",
            Opt2: "Learning HTML",
            Opt3: "Starting a business",
            Opt4: "Binge-watching anime",
            Answer: "Learning HTML"
        },

    ]





//Test Function
const beginTest = () => {

    //Set First Questions
    var testNumber = 0
    var chosenAnswers = []

    //Get Questions
    let chosenQuestions = []

    for (i = 0; i < 10;) {

        let rando = Math.floor(Math.random() * 20)

        if (chosenQuestions.includes(QUESTIONLIBRARY[rando])) {
            console.log('Nah')
        } else {
            chosenQuestions.push(QUESTIONLIBRARY[rando])
            chosenQuestions[i].Id = i + 1
            i++
        }

    }

    let con = document.querySelector('.options-container')
    con.style.height = "256px"
    let questionNumber = document.querySelector('.question-container .number')
    let progressBar = document.querySelector('.progress-bar .progress')

    //Test Submission
    const Submission = () => {
        let user = new newSession(
            JSON.parse(sessionStorage.getItem('CurrentUser'))
        )

        user.testUpdate(chosenQuestions)
        location.href = "./profile.html"
    }
    
    //Timer
    let Timer = () => {

        const startingMinutes = 5
        let time = startingMinutes * 60
        let countDown = document.querySelector('.question-container .timer')

        let updateCountDown = () => {
            let minutes = Math.floor(time / 60)
            let seconds = time % 60

            if (seconds < 10) { seconds = "0" + seconds }
            
            if (time < 0) {
                clearInterval(timerInterval)
                alert(`Your time has elasped
                Your test will be auto-submitted`
                )

                Submission()
                return
            }

            countDown.innerHTML = `0${minutes}:${seconds}`
            time--
        }

        let timerInterval = setInterval(updateCountDown, 1000)

    }

    //Question Generation
    let generateQuestion = () => {
        let currentQuestion = chosenQuestions[testNumber]

        con.innerHTML = `<div class="overlay"></div>`

        if (testNumber < 9) {
            questionNumber.innerText = `0${testNumber + 1}`
        } else {
            questionNumber.innerText = `${testNumber + 1}`
        }
        progressBar.style.width = `${((testNumber + 1) / 10) * 100}%`
        

        document.querySelector('.question').innerText = currentQuestion.Question

        for (let i = 0; i < 4; i++) {

            let id = i + 1

            let label = document.createElement('label')
            label.setAttribute('for', `opt${id}`)
            label.classList.add('options')

            if (currentQuestion[`Opt${id}`] == currentQuestion.Answer) {
                label.classList.add('right')
            }

            let span = document.createElement('span')
            span.innerText = currentQuestion[`Opt${id}`]

            let input = document.createElement('input')
            input.setAttribute('type', "radio")
            input.setAttribute('name', "options")
            input.setAttribute('value', currentQuestion[`Opt${id}`])
            input.setAttribute('id', `opt${id}`)

            label.appendChild(span)
            label.appendChild(input)

            con.appendChild(label)
            
        }

        

        // After picking options
        const options = document.querySelectorAll('.options input')


        if (currentQuestion.chosen) {
            document.querySelector('.options-container .overlay').style.display = 'block'
            document.querySelector('.options.right').classList.add('chosen')
            
            document.getElementById(currentQuestion.chosen.id).parentElement.classList.add('chosen')

            console.log(currentQuestion.chosen, currentQuestion.chosen.parentElement)
        } else {
            options.forEach(option => {
                option.onclick = () => {
                    let chosenOption = document.querySelector('.options-container input:checked')

                    document.querySelector('.options-container .overlay').style.display = 'block'
                    document.querySelector('.options.right').classList.add('chosen')

                    currentQuestion.chosen = chosenOption
                    currentQuestion.chosenAnswer = chosenOption.value
                    console.log(currentQuestion, chosenQuestions)
                }
            });
        }

    }

    let nextBtn = document.querySelector('.next-question')
    let prevBtn = document.querySelector('.prev-question')

    nextBtn.onclick = () => {

        if (testNumber == 8) {
            nextBtn.innerText = "Submit"
        } else {
            nextBtn.innerText = "Next"
        }
        if (testNumber < 9) {
            testNumber++
            generateQuestion()
        } else {
            let submit = confirm('Would You Like To Submit?')

            if (submit) {
                Submission()
                location.href = "./profile.html"
            }
        }
    }

    prevBtn.onclick = () => {
        if (testNumber > 0) {
            testNumber--
            nextBtn.innerText = "Next"
            generateQuestion()

        }
    }



    console.log(chosenQuestions)

    generateQuestion()
    Timer()
    
}

beginTest()

newArray = [1, 2, 3]
for (const value of newArray) {
    let me = {
        id: 1,
        value: "ME"
    }
    if (newArray.indexOf(value) == me.id) {
        newArray[newArray.indexOf(value)] = me
    }
}

console.log(newArray)