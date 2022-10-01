const tenthSchoolName = document.querySelector("#school-name"),
tenthFullMark = document.querySelector("#full-mark-tenth"),
tenthObtainMark = document.querySelector("#obtained-mark-tenth");

const twelthClgName = document.querySelector("#twelth-clg-name"),
twelthFullMark = document.querySelector("#full-mark-twelth"),
twelthObtainMark = document.querySelector("#obtained-mark-twelth");

const gradClgName = document.querySelector("#grad-clg-name"),
gradFullMark = document.querySelector("#full-mark-grad"),
gradObtainMark = document.querySelector("#obtained-mark-grad");


const submitEdetail = document.querySelector("#submit-edetail");
let educationalBasket = {}
submitEdetail.addEventListener("click", (e) => {
    let uTenthSchlName = tenthSchoolName.value;
    let uTenthFull = tenthFullMark.value;
    let uTenthObtain = tenthObtainMark.value;
    let uTwelthClgName = twelthClgName.value;
    let uTwelthFull = twelthFullMark.value;
    let uTwelthObtain = twelthObtainMark.value;
    let uGradClgName = gradClgName.value;
    let uGradFull = gradFullMark.value;
    let uGradObtain = gradObtainMark.value;

    if(uTenthSchlName !== '' && uTenthFull !== '' && uTenthObtain !== '' && uTwelthClgName !== '' &&
        uTwelthFull !== '' && uTwelthObtain !== '' && uGradClgName !== '' && uGradFull !== '' && uGradObtain !== ''){
            localStorage.setItem('e-data', JSON.stringify({
                tenSchoolName : uTenthSchlName,
                tenFullMark: uTenthFull,
                tenthObtainMark: uTenthObtain,
                twelClgName: uTwelthClgName,
                twelFullMark: uTwelthFull,
                twelObtainMark: uTwelthObtain,
                gClgName: uGradClgName,
                gFullMark: uGradFull,
                gObtainMark: uGradObtain
            }));
            
    }else {
        e.preventDefault();
        alert("Please fill all the details")
    }
})
