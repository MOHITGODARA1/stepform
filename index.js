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
   let emailvalid=false;
   let numbervalid=false;
   let namevalid=false;
   // emailcheck
   if(email.trim()===""){
      document.querySelector("#emailrequired").style.display="block";
      emailinput.style.border="1px solid rgb(220, 31, 31)";
      emailvalid=false;
   }else if(!email.includes("@gmail.com")){
      document.querySelector(".emailerror").style.display="block";
      document.querySelector("#emailrequired").style.display="none";
      emailinput.style.border="1px solid rgb(220, 31, 31)";
      emailvalid=false;
   }
   else{
      document.querySelector(".emailerror").style.display="none";
      document.querySelector("#emailrequired").style.display="none";
      emailinput.style.border="1px solid rgb(0, 0, 0)";
      emailvalid=true;
   }
   // namecheck
   if(name.trim()===""){
      document.querySelector("#nameerror1").style.display="block";
      nameinput.style.border="1px solid rgb(220, 31, 31)";
      namevalid=false;
   }else{
      document.querySelector("#nameerror1").style.display="none";
      nameinput.style.border="1px solid rgb(0, 0, 0)";
      namevalid=true;
   }
   //phoone number check
   const number=numberinput.value;
   if(number.trim()===""){
      document.querySelector("#numbererror").style.display="block";
      numberinput.style.border="1px solid rgb(220, 31, 31)";
      numbervalid=false;
   }else{
      document.querySelector("#numbererror").style.display="none";
      numberinput.style.border="1px solid rgb(0, 0, 0)";
      numbervalid=true;
   }
   if(namevalid && namevalid && emailvalid){
      firstinner.style.display="none";
      resetall();
      document.querySelector("#secondcircle").style.backgroundColor = "rgb(125, 227, 193)";
      document.querySelector("#selectplan").style.color = "black";
      document.querySelector(".innerpart2").style.display="block";
   }
   
});


//for second form
const toggle = document.getElementById("toggleSwitch");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

let check=false;
toggle.addEventListener("change", () => {
  if (toggle.checked) {
   check=true;
    monthly.classList.remove("active");
    yearly.classList.add("active");
   document.querySelector("#firstammount").textContent="$40/mo";
   document.querySelector("#secondammount").textContent="$100/mo";
   document.querySelector("#thirdammount").textContent="$200/mo";
  } else {
   check=false;
    yearly.classList.remove("active");
    monthly.classList.add("active");
    document.querySelector("#firstammount").textContent="$9/mo";
   document.querySelector("#secondammount").textContent="$12/mo";
   document.querySelector("#thirdammount").textContent="$15/mo";
  }
});
const allDivs = document.querySelectorAll("#firstdiv, #seconddiv, #thirddiv");
let price="";
let name="";
allDivs.forEach(div => {
  div.addEventListener("click", function () {
   allDivs.forEach(d=>{d.style.backgroundColor=""});
   this.style.backgroundColor=" rgba(0, 0, 0, 0.295)";
   name=this.querySelector("h3.arcade").textContent.trim();
   console.log(name);
   const time=check?"Year":"month";
   const maincharge=document.querySelector("#maincharge").innerHTML=`${name} (${time})`;
   price = this.querySelector(".ammount").textContent.trim();
   const mainchargeprice=document.querySelector("#mainchargeprice").innerHTML=`${price}`;
   console.log(price);
  });
});
// console.log(price);


document.querySelector(".secondnext").addEventListener("click",()=>{
   document.querySelector(".innerpart2").style.display="none";
   document.querySelector(".thirdinnersection").style.display="block";
   resetall();
   document.querySelector("#thirdcircle").style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#addon").style.color = "black";
   
});
document.querySelector(".secondgoback").addEventListener("click",()=>{
   document.querySelector(".innerpart2").style.display="none";
   firstinner.style.display="block";
   resetall();
   firstcircle.style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#yourinfo").style.color = "black";
});



//third step form section
const firstcheckboxdiv = document.querySelectorAll(".checkboxone");

// This will store selected options as objects: { name: "Online Service", price: "$1/mo" }
let selectedAddons = [];
let serviceprice="";
firstcheckboxdiv.forEach(div => {
  div.addEventListener("click", function () {
    const checkbox = this.querySelector("input[type=checkbox]");
    const nameElement = this.querySelector(".online"); 
    const priceElement = this.querySelector(".pickammount");
    if (!checkbox || !nameElement || !priceElement) return;
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      this.style.backgroundColor = "#345c8e5e";
      this.style.border = "1px solid #3c7cca";
    } else {
      this.style.backgroundColor = "";
      this.style.border = "";
    }

    const name = nameElement.textContent.trim();
    const price = priceElement.textContent.trim();
    if (checkbox.checked) {
       
      selectedAddons.push({ name, price });

    } else {
      selectedAddons = selectedAddons.filter(item => item.name !== name);
    }
    const chargesname=[document.querySelector("#firstnamecharge"),document.querySelector("#secondnamecharge"),document.querySelector("#thirdnamecharge")];
    const chargesprice=[document.querySelector("#firstpricecharge"),document.querySelector("#secondpricecharge"),document.querySelector("#thirdpricecharge")];
    chargesname.forEach(el=>el.innerHTML="");
    chargesprice.forEach(el=>el.innerHTML="");
    for(let i=0;i<selectedAddons.length;i++){
      serviceprice+=selectedAddons[i].price.replace(/[0-9]/g,"");
      console.log(selectedAddons);
      chargesname[i].innerHTML=`${selectedAddons[i].name}`;
      chargesprice[i].innerHTML=`${selectedAddons[i].price}`;
    }
  });
});

 document.querySelector("#thirdbutton").addEventListener("click",()=>{
   document.querySelector(".innerpart2").style.display="block";
   document.querySelector(".thirdinnersection").style.display="none";
   resetall();
   document.querySelector("#secondcircle").style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#selectplan").style.color = "black";
 });


function updateTotal() {
  let planAmount = Number(price.replace(/[^0-9]/g, ""));
  let addonTotal = 0;
  selectedAddons.forEach(addon => {
    addonPrice = Number(addon.price.replace(/[^0-9]/g, ""));
    addonTotal += addonPrice;
  });
  let total = planAmount + addonTotal;
  document.querySelector(".totalam").innerHTML = `$${total}/mo`;
}

 
 document.querySelector("#thirdnextbutton").addEventListener("click",()=>{
   document.querySelector(".thirdinnersection").style.display="none";
   document.querySelector(".fourthinnersection").style.display="block";
   resetall();
   updateTotal();
   document.querySelector("#fourthcircle").style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#summary").style.color = "black";
 });

//fourth step js



 document.querySelector("#fourthbutton").addEventListener("click",()=>{
   document.querySelector(".thirdinnersection").style.display="block";
   document.querySelector(".fourthinnersection").style.display="none";
   resetall();
   document.querySelector("#thirdcircle").style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#addon").style.color = "black";
 });
 document.querySelector("#fourthnextbutton").addEventListener("click",()=>{
   document.querySelector(".fourthinnersection").style.display="none";
   document.querySelector(".fifthdiv").style.display="block";
   resetall();
   document.querySelector("#fourthcircle").style.backgroundColor = "rgb(125, 227, 193)";
   document.querySelector("#summary").style.color = "black";
 });