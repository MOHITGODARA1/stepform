const nameinput = document.querySelector("#nameinput");
const emailinput = document.querySelector("#emailinput");
const numberinput = document.querySelector("#numberinput");
const btn = document.querySelector(".first-next-button");
const firstcircle = document.querySelector(".forcircle");
const firstinner = document.querySelector(".innerrightsection");

const resetall = () => {
  ["yourinfo", "selectplan", "addon", "summary"].forEach((id, i) => {
    document.querySelector(`#${id}`).style.color = "";
    document.querySelector(`#${['first', 'second', 'third', 'fourth'][i]}circle`).style.backgroundColor = "";
  });
};

firstcircle.style.backgroundColor = "rgb(125, 227, 193)";
document.querySelector("#yourinfo").style.color = "black";

btn.addEventListener("click", () => {
  const name = nameinput.value.trim();
  const email = emailinput.value.trim();
  const number = numberinput.value.trim();

  const namevalid = name !== "";
  const emailvalid = email !== "" && email.includes("@gmail.com");
  const numbervalid = number !== "";

  document.querySelector("#nameerror1").style.display = namevalid ? "none" : "block";
  nameinput.style.border = namevalid ? "1px solid black" : "1px solid rgb(220, 31, 31)";

  document.querySelector("#emailrequired").style.display = email === "" ? "block" : "none";
  document.querySelector(".emailerror").style.display = (email && !email.includes("@gmail.com")) ? "block" : "none";
  emailinput.style.border = emailvalid ? "1px solid black" : "1px solid rgb(220, 31, 31)";

  document.querySelector("#numbererror").style.display = numbervalid ? "none" : "block";
  numberinput.style.border = numbervalid ? "1px solid black" : "1px solid rgb(220, 31, 31)";

  if (namevalid && emailvalid && numbervalid) {
    firstinner.style.display = "none";
    resetall();
    document.querySelector("#secondcircle").style.backgroundColor = "rgb(125, 227, 193)";
    document.querySelector("#selectplan").style.color = "black";
    document.querySelector(".innerpart2").style.display = "block";
  }
});

const toggle = document.getElementById("toggleSwitch");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
let isYearly = false;

const planPrices = {
  monthly: ["$9/mo", "$12/mo", "$15/mo"],
  yearly: ["$40/mo", "$100/mo", "$200/mo"]
};

const updatePrices = () => {
  const prices = isYearly ? planPrices.yearly : planPrices.monthly;
  ["#firstammount", "#secondammount", "#thirdammount"].forEach((id, idx) => {
    document.querySelector(id).textContent = prices[idx];
  });
};

toggle.addEventListener("change", () => {
  isYearly = toggle.checked;
  monthly.classList.toggle("active", !isYearly);
  yearly.classList.toggle("active", isYearly);
  updatePrices();
});

const allDivs = document.querySelectorAll("#firstdiv, #seconddiv, #thirddiv");
let selectedPlan = { name: "", price: "" };

allDivs.forEach(div => {
  div.addEventListener("click", function () {
    allDivs.forEach(d => d.style.backgroundColor = "");
    this.style.backgroundColor = "rgba(0, 0, 0, 0.295)";
    selectedPlan.name = this.querySelector("h3.arcade").textContent.trim();
    selectedPlan.price = this.querySelector(".ammount").textContent.trim();
    const time = isYearly ? "Year" : "month";
    document.querySelector("#maincharge").innerHTML = `${selectedPlan.name} (${time})`;
    document.querySelector("#mainchargeprice").innerHTML = selectedPlan.price;
  });
});

document.querySelector(".secondnext").addEventListener("click", () => {
  document.querySelector(".innerpart2").style.display = "none";
  document.querySelector(".thirdinnersection").style.display = "block";
  resetall();
  document.querySelector("#thirdcircle").style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#addon").style.color = "black";
});

document.querySelector(".secondgoback").addEventListener("click", () => {
  document.querySelector(".innerpart2").style.display = "none";
  firstinner.style.display = "block";
  resetall();
  firstcircle.style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#yourinfo").style.color = "black";
});

const firstcheckboxdiv = document.querySelectorAll(".checkboxone");
let selectedAddons = [];

firstcheckboxdiv.forEach(div => {
  div.addEventListener("click", function () {
    const checkbox = this.querySelector("input[type=checkbox]");
    const name = this.querySelector(".online").textContent.trim();
    const price = this.querySelector(".pickammount").textContent.trim();
    checkbox.checked = !checkbox.checked;
    this.style.backgroundColor = checkbox.checked ? "#345c8e5e" : "";
    this.style.border = checkbox.checked ? "1px solid #3c7cca" : "";

    if (checkbox.checked) {
      selectedAddons.push({ name, price });
    } else {
      selectedAddons = selectedAddons.filter(item => item.name !== name);
    }

    ["#firstnamecharge", "#secondnamecharge", "#thirdnamecharge"].forEach((id, idx) => {
      document.querySelector(id).innerHTML = selectedAddons[idx]?.name || "";
    });

    ["#firstpricecharge", "#secondpricecharge", "#thirdpricecharge"].forEach((id, idx) => {
      document.querySelector(id).innerHTML = selectedAddons[idx]?.price || "";
    });
  });
});

document.querySelector("#thirdbutton").addEventListener("click", () => {
  document.querySelector(".thirdinnersection").style.display = "none";
  document.querySelector(".innerpart2").style.display = "block";
  resetall();
  document.querySelector("#secondcircle").style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#selectplan").style.color = "black";
});

const updateTotal = () => {
  const base = parseFloat(selectedPlan.price.replace(/[^0-9.]/g, ""));
  const addonSum = selectedAddons.reduce((sum, addon) => sum + parseFloat(addon.price.replace(/[^0-9.]/g, "")), 0);
  document.querySelector(".totalam").innerHTML = `$${base + addonSum}/mo`;
};

document.querySelector("#thirdnextbutton").addEventListener("click", () => {
  document.querySelector(".thirdinnersection").style.display = "none";
  document.querySelector(".fourthinnersection").style.display = "block";
  resetall();
  updateTotal();
  document.querySelector("#fourthcircle").style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#summary").style.color = "black";
});

document.querySelector("#fourthbutton").addEventListener("click", () => {
  document.querySelector(".fourthinnersection").style.display = "none";
  document.querySelector(".thirdinnersection").style.display = "block";
  resetall();
  document.querySelector("#thirdcircle").style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#addon").style.color = "black";
});

document.querySelector("#fourthnextbutton").addEventListener("click", () => {
  document.querySelector(".fourthinnersection").style.display = "none";
  document.querySelector(".fifthdiv").style.display = "block";
  resetall();
  document.querySelector("#fourthcircle").style.backgroundColor = "rgb(125, 227, 193)";
  document.querySelector("#summary").style.color = "black";
});