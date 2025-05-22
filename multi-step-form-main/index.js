const nameinput=document.querySelector("#nameinput");
const btn=document.querySelector(".first-next-button");
const emailinput=document.querySelector("#emailinput");
const numberinput=document.querySelector("#numberinput");
const firstcircle=document.querySelector(".forcircle");

const firstinner=document.querySelector(".innerrightsection");
//background of the step
let count = 1; 
function resetall(){
   firstcircle.style.backgroundColor = "";
   document.querySelector("#yourinfo").style.color = "";

   document.querySelector("#secondcircle").style.backgroundColor = "";
   document.querySelector("#selectplan").style.color = "";

   document.querySelector("#thirdcircle").style.backgroundColor = "";
   document.querySelector("#addon").style.color = "";

   document.querySelector("#fourthcircle").style.backgroundColor = "";
   document.querySelector("#summary").style.color = "";
}
firstcircle.style.backgroundColor = "rgb(125, 227, 193)";
document.querySelector("#yourinfo").style.color = "black";
//first button of the form
btn.addEventListener("click",()=>{
   const name=nameinput.value;
   const email=emailinput.value;
   let valid=true;
   // emailcheck
   if(email.trim()===""){
      document.querySelector("#emailrequired").style.display="block";
      emailinput.style.border="1px solid rgb(220, 31, 31)";
      valid=false;
   }else if(!email.includes("@gmail.com")){
      document.querySelector(".emailerror").style.display="block";
      document.querySelector("#emailrequired").style.display="none";
      emailinput.style.border="1px solid rgb(220, 31, 31)";
      valid=false;
   }
   else{
      document.querySelector(".emailerror").style.display="none";
      document.querySelector("#emailrequired").style.display="none";
      emailinput.style.border="1px solid rgb(0, 0, 0)";
      valid=true;
   }
   // namecheck
   if(name.trim()===""){
      document.querySelector("#nameerror1").style.display="block";
      nameinput.style.border="1px solid rgb(220, 31, 31)";
      valid=false;
   }else{
      document.querySelector("#nameerror1").style.display="none";
      nameinput.style.border="1px solid rgb(0, 0, 0)";
      valid=true;
   }
   //phoone number check
   const number=numberinput.value;
   if(number.trim()===""){
      document.querySelector("#numbererror").style.display="block";
      numberinput.style.border="1px solid rgb(220, 31, 31)";
      valid=false;
   }else{
      document.querySelector("#numbererror").style.display="none";
      numberinput.style.border="1px solid rgb(0, 0, 0)";
      valid=true;
   }
   if(valid){
      firstinner.style.display="none";
      resetall();
      document.querySelector("#secondcircle").style.backgroundColor = "rgb(125, 227, 193)";
      document.querySelector("#selectplan").style.color = "black";
      document.querySelector(".innerpart2").style.display="block"
   }
   
});

//for second form
const allDivs = document.querySelectorAll("#firstdiv, #seconddiv, #thirddiv");
let price=0;
allDivs.forEach(div => {
  div.addEventListener("click", function () {
   allDivs.forEach(d=>{d.style.backgroundColor=""});
   this.style.backgroundColor=" rgba(0, 0, 0, 0.295)";
   price = this.querySelector(".ammount").textContent;
   console.log(price);
  });
});
const toggle = document.getElementById("toggleSwitch");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");


toggle.addEventListener("change", () => {
  if (toggle.checked) {
    monthly.classList.remove("active");
    yearly.classList.add("active");
   document.querySelector("#firstammount").textContent="$40/mo";
   document.querySelector("#secondammount").textContent="$100/mo";
   document.querySelector("#thirdammount").textContent="$200/mo";
  } else {
    yearly.classList.remove("active");
    monthly.classList.add("active");
    document.querySelector("#firstammount").textContent="$9/mo";
   document.querySelector("#secondammount").textContent="$12/mo";
   document.querySelector("#thirdammount").textContent="$15/mo";
  }
});

document.querySelector(".secondgoback").addEventListener("click",()=>{
   document.querySelector(".innerpart2").style.display="none";
   firstinner.style.display="block";
   resetall();
   firstcircle.style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#yourinfo").style.color = "black";
})





