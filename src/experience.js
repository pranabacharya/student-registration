const companyName = document.querySelector('#company-name'),
jobRole = document.querySelector('#job-role'),
moreAbout = document.querySelector('#more-about'),
checkbox = document.querySelector('#checked'),
finished = document.querySelector('#finished');


finished.addEventListener('click', (e) => {
    if(checkbox.checked !== true){
        let uJobRole = jobRole.value, 
        uCompanyName = companyName.value,
        uMoreAbout = moreAbout.value;

        if(uJobRole !== '' || uCompanyName !== '' || umoreAbout !== ''){
            localStorage.setItem('job-experience', JSON.stringify({
                userCompany: uCompanyName, 
                userJobRole: uJobRole, 
                userMoreAbout: uMoreAbout
            }))
        }else {
            alert("Please provid valid information");
        }
    }else{
        localStorage.setItem('job-experience', JSON.stringify({
            experience: 'None'
        }))
    }
})