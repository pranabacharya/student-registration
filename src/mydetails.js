const userPersonalDetails = JSON.parse(localStorage.getItem('data')),
userEducationalDetails = JSON.parse(localStorage.getItem('e-data')),
userJobExperience = JSON.parse(localStorage.getItem('job-experience'));



const personalDataSection = document.querySelector('[data-personal]'),
educationalDataSection = document.querySelector('[data-educational]'),
experienceDataSection = document.querySelector('[data-experience]');

if(userPersonalDetails === null && userEducationalDetails === null && userJobExperience === null){
    document.querySelector(".main-container").innerHTML = `<h2>No Details</h2>`;
}else{
    let {uname, udob, uemail, uaddress} = userPersonalDetails;
personalDataSection.innerHTML = `
    <h3>Personal Data</h3><hr />
    <form action="#">
        <label for="u_name">Name</label>
        <input type="text" value="${uname}" disabled/>
        <label for="dob">DOB</label>
        <input type="text" value="${udob}" disabled/>
        <label for="u_name">Email</label>
        <input type="text" value="${uemail}" disabled/>
        <label for="u_name">Address</label>
        <textarea disabled>${uaddress}</textarea>
        </form>
`;
let {tenSchoolName, tenFullMark, tenthObtainMark, twelClgName, twelFullMark, twelObtainMark, gClgName, gFullMark, gObtainMark} = userEducationalDetails;

educationalDataSection.innerHTML = `
    <h3>Educational Data</h3><hr />
    <form action="#">
        <h3>10th: </h3>
        <label for="SchoolName">School Name: </label>
        <input type="text" id="school-name" value="${tenSchoolName}" disabled>
        <label for="Full Mark">Full Mark:</label>
        <input type="number" value="${tenFullMark}" disabled>
        <label for="Obtained Mark">Obtained Mark:</label>
        <input type="number" value="${tenthObtainMark}" disabled>
        <h3>12th: </h3>
        <label for="twelclgname">College Name:</label>
        <input type="text" value="${twelClgName}" disabled>
        <label for="twelthfullmark">Full Mark</label>
        <input type="number" value="${twelFullMark}" disabled>
        <label for="twelthobtainmark">Obtained Mark</label>
        <input type="number" value="${twelObtainMark}" disabled>
        <h3>Graduation: </h3>
        <label for="gradclgname">College Name</label>
        <input type="text" value="${gClgName}" disabled>
        <label for="gradfullmark">Full Mark</label>
        <input type="number" value="${gFullMark}" disabled>
        <label for="gradobtainmark">Obtained Mark</label>
        <input type="number" value="${gObtainMark}" disabled>
    </form>
`;

if(Object.keys(userJobExperience).length === 1){
    let {experience} = userJobExperience;
    experienceDataSection.innerHTML = `
    <h3>Job Experience </h3><hr />
        <form action="#">
            <label for="job-experience">Job Experience: </label>
            <input type="text" value="${experience}"disabled />
        </form>
    `;
}else{
    let {userCompany, userJobRole, userMoreAbout} = userJobExperience;
    experienceDataSection.innerHTML = `
    <h3>Job Experience </h3><hr />
        <form action="#">
            <label for="company-name">Company Name: </label>
            <input type="text" value="${userCompany}" disabled disabled>
            <label for="job-role">Job Role: </label>
            <input type="text" value="${userJobRole}" disabled>
            <label for="Description">Job Description: </label>
            <textarea disabled>${userMoreAbout}</textarea>
        </form>`;
}

function clearLocalStorage(){
    if(confirm("Are you sure want to delete ?")){
        localStorage.removeItem('data');
        localStorage.removeItem('e-data');
        localStorage.removeItem('job-experience');
        window.location = "index.html";
        alert("Deleted");
    }
}
function redirectToSucess(){
    localStorage.removeItem('data');
    localStorage.removeItem('e-data');
    localStorage.removeItem('job-experience');
    window.location = "sucessful.html";
}
console.log(userPersonalDetails)
}

