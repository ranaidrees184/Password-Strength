let input=document.getElementById("input");
let eyeIcon=document.querySelector("#eye");
let list=document.querySelectorAll(".list");
let isValid;
let requirementItem;
const requirements=[
    {regex:/.{8,}/,index:0},
    {regex:/[0-9]/,index:1},
    {regex:/[a-z]/,index:2},
    {regex:/[^A-Za-z0-9]/,index:3},
    {regex:/[A-Z]/,index:4},
];

input.addEventListener("keyup",(e)=>{
    requirements.forEach(item =>{
     isValid =item.regex.test(e.target.value);
       requirementItem=list[item.index];

    //    console.log("Is valid is "+isValid);
    if(isValid)
    {
        requirementItem.firstElementChild.className="fa-solid fa-check";
        
    }
    else
    {
       requirementItem.firstElementChild.className="fa-solid fa-circle";
    }
    })
     
});

eyeIcon.addEventListener("click",()=>{
    input.type = input.type === "password" ? "text":"password";
    eyeIcon.className=`fa-solid fa-eye${input.type === "password"?" ":"-slash"}`;
});

