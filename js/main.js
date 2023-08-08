
let title = document.getElementById("title")
let titleError = document.getElementById("titleError")
let fName = document.getElementById("fName")
let midName = document.getElementById("midName")
let lName = document.getElementById("lName")
let dob = document.getElementById("dob")
let gender = document.getElementById("gender")
let compulsory = document.getElementById("compulsory")
let worktype = document.getElementById("worktype")
let experience = document.getElementById("experience")
let skill = document.getElementById("skill")
let degree = document.getElementById("degree")
let btn = document.getElementById("btn")
let fnameError = document.getElementById("fnameError")
let lnameError = document.getElementById("lNameError")
let dobError = document.getElementById("dobError")
let genderError = document.getElementById("genderError")
let religion = document.getElementById("religion")
let religionError = document.getElementById("religionError")
let region = document.getElementById("region")
let regionError = document.getElementById("regionError")
let language = document.getElementById("language")
let languageError = document.getElementById("languageError")
let address = document.getElementById ("address")
let addressError = document.getElementById ("addressError")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let marital = document.getElementById("marital")
let maritalError = document.getElementById("maritalError")
let phone = document.getElementById("phone")
let phoneError = document.getElementById("phoneError")
let degreeError = document.getElementById("degreeError")
let worktypeError = document.getElementById("worktypeError")
let experienceError = document.getElementById("experienceError")
let skillError = document.getElementById("skillError")
let employment = document.getElementById("employment")
let employmentError = document.getElementById("employmentError")
let salary = document.getElementById("salary")
let salaryError = document.getElementById("salaryError")
let termsError = document.getElementById("termsError")
let messageTxt = document.getElementById("messageTxt")



let regionPoint = 0
let languagePoint = 0
let maritalPoint = 0
let genderPoint = 0
let religionPoint = 0

let degreePoint = 0
let worktypePoint = 0
let experiencePoint = 0
let skillPoint = 0
let employmentPoint = 0
let salaryPoint = 0

let bio
let qualification
let totalScore

// btn.addEventListener("click", function (e) {
//     e.preventDefault()
//     validateData()
// })

btn.addEventListener("click", function () {
    validateData()
})

function validateData() {

    if (title.value == "") {
        titleError.innerHTML = "*Required"
    }
    else {
        titleError.innerHTML = ""
    }

    console.log(title.value);

    if (fName.value == "") {
        fnameError.innerHTML = "*Required"
    }
    else {
        fnameError.innerHTML = ""
    }

    if (lName.value == "") {
        lnameError.innerHTML = "*Required"
    }
    else {
        lnameError.innerHTML = ""
    }

    if (dob.value == "") {
        dobError.innerHTML = "*Required"
    }
    else {
        dobError.innerHTML = ""
    }

    if (gender.value == "") {
        genderError.innerHTML = "*Required"
    }
    else {
        genderError.innerHTML = ""
    }

    if (religion.value == "") {
        religionError.innerHTML = "*Required"
    }
    else {
        religionError.innerHTML = ""
    }

    if (region.value == "") {
        regionError.innerHTML = "*Required"
    }
    else {
        regionError.innerHTML = ""
    }

    if (language.value == "") {
        languageError.innerHTML = "*Required"
    }
    else {
        languageError.innerHTML = ""
    }

    if (address.value == "") {
        addressError.innerHTML = "*Required"
    }
    else {
        addressError.innerHTML = ""
    }

    if (email.value == "") {
        emailError.innerHTML = "*Required"
    }
    else {
        emailError.innerHTML = ""
    }
    
    if (marital.value == "") {
        maritalError.innerHTML = "*Required"
    }
    else {
        maritalError.innerHTML = ""
    }

    if (phone.value == "") {
        phoneError.innerHTML = "*Required"
    }
    else {
        phoneError.innerHTML = ""
    }

    if (passport.value == "") {
        passportError.innerHTML = "*Required"
    }
    else {
        passportError.innerHTML = ""
    }

    if (worktype.value == "") {
        worktypeError.innerHTML = "*Required"
    }
    else {
        worktypeError.innerHTML = ""
    }

    if (experience.value == "") {
        experienceError.innerHTML = "*Required"
    }
    else {
        experienceError.innerHTML = ""
    }

    if (skill.value == "") {
        skillError.innerHTML = "*Required"
    }
    else {
        skillError.innerHTML = ""
    }

    if (degree.value == "") {
        degreeError.innerHTML = "*Required"
    }
    else {
        degreeError.innerHTML = ""
    }

    if (employment.value == "") {
        employmentError.innerHTML = "*Required"
    }
    else {
        employmentError.innerHTML = ""
    }

    if (salary.value == "") {
        salaryError.innerHTML = "*Required"
    }
    else {
        salaryError.innerHTML = ""
    }
    if (termsConditions.checked == "") {
        termsError.innerHTML = "* Kindly Check the box"
    } else {
        termsError.innerHTML = ""
    }

    if (title.value != "" && fName.value != "" && lName.value != "" && dob.value != "" && gender.value != "" && religion.value != "" && region.value != "" && address.value != "" && language.value != "" && email.value != "" && marital.value != "" && phone.value != "" && passport.value != "" && worktype.value != "" && experience.value != "" && skill.value != "" && degree.value != "" && employment.value != "" && salary.value != "" && termsConditions.checked != "")
    
        firstTest()
}

function firstTest() {

        if (gender.value == "1") {
                    genderPoint += 15
        } else if (gender.value == "2") {
                    genderPoint += 15
        } else {
                    genderPoint += 0
        }

        if (religion.value == "1") {
            religionPoint += 15
        } else if (religion.value == "2") {
            religionPoint += 15
        } else {
            religionPoint += 10
        }

        if (region.value == "1") {
            regionPoint += 15
        } else if (region.value == "2") {
            regionPoint += 12
        } else if (region.value == "3") {
            regionPoint += 10
        } else if (region.value == "4") {
            regionPoint += 8
        } else {
            regionPoint += 5
        }

        if (language.value == "1") {
            languagePoint += 15
        } else if (language.value == "2") {
            languagePoint += 12
        } else if (language.value == "3") {
            languagePoint += 10
        } else if (language.value == "4") {
            languagePoint += 8
        } else {
            languagePoint += 5
        }

        if (marital.value == "1") {
                maritalPoint += 15
        } else if (marital.value == "2") {
                maritalPoint += 8
        } else if (marital.value == "3") {
                maritalPoint += 12
        } else {
                maritalPoint += 5
        }

        secondTest()
}

    
function secondTest() {

        if (degree.value == "1") {
            degreePoint += 14
        } else if (degree.value == "2") {
            degreePoint += 11
        } else if (degree.value == "3") {
            degreePoint += 8
        } else {
            degreePoint += 5
        }

        if (skill.value == "1") {
            skillPoint += 14
        } else if (skill.value == "2") {
            skillPoint += 11
        } else if (skill.value == "3") {
            skillPoint += 8
        } else {
            skillPoint += 5
        }

        if (experience.value == "1") {
            experiencePoint += 14
        } else if (experience.value == "2") {
            experiencePoint += 11
        } else if (experience.value == "3") {
            experiencePoint += 8
        } else {
            experiencePoint += 5
        }

        if (worktype.value == "1") {
            worktypePoint += 14
        } else if (worktype.value == "2") {
            worktypePoint += 10
        } else {
            worktypePoint += 7
        }

        if (employment.value == "1") {
            employmentPoint += 5
        } else {
            employmentPoint += 3
        }

        if (salary.value == "1") {
            salaryPoint += 14
        } else if (salary.value == "2") {
            salaryPoint += 11
        } else if (salary.value == "3") {
            salaryPoint += 8
        } else {
            salaryPoint += 5
        }

        process()
}

function process() {

        bio = genderPoint + religionPoint + regionPoint + languagePoint + maritalPoint

        qualification = degreePoint + skillPoint + experiencePoint + worktypePoint + employmentPoint + salaryPoint

        totalScore = (bio + qualification)/2

        console.log(bio);
        console.log(qualification);
        console.log(totalScore);

        if (totalScore <= 80) {
            // alert(title.value + "" + fName.value + " " + midName.value + " " + lName.value  + ", " + "You have been accepted, a letter with details for the interview has been sent to your mail")
            messageTxt.innerHTML = title.value + " " + fName.value + " " + midName.value + " " + lName.value  + ", " + "You have been accepted, a letter with details for the interview has been sent to your mail"
            messageTxt.style.color = "green"
        } else {
            // alert(title.value + "" + fName.value + " " + midName.value + " " + lName.value  + ", " + "you have been rejected")
            messageTxt.innerHTML = title.value + " " + fName.value + " " + midName.value + " " + lName.value  + ", " + "you have been rejected"
            messageTxt.style.color = "red"
        }
        
        endPrediction()
}

function endPrediction() {

    title.value = ""
    fName.value = ""
    midName.value = ""
    lName.value = ""
    dob.value = ""
    gender.value = ""
    religion.value = ""
    region.value = ""
    address.value = ""
    language.value = ""
    email.value = ""
    marital.value = ""
    phone.value = ""
    passport.value = ""
    worktype.value = ""
    experience.value = ""
    skill.value = ""
    degree.value = ""
    employment.value = ""
    salary.value = ""
    termsConditions.checked = ""
    
}
