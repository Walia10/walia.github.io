
const progressBar = document.querySelector("progress");
const step1= document.getElementById("step1");
const step2= document.getElementById("step2");
const step3= document.getElementById("step3");
const step4= document.getElementById("step4");




const summaryAdults= document.getElementById("summaryAdults");
const summaryActivity= document.getElementById("summaryActivity");
const summaryChildren= document.getElementById("summaryChildren");
const summaryColor= document.getElementById("summaryColor");
const summaryCooking= document.getElementById("summaryCooking");
const summaryDuration= document.getElementById("summaryDuration");
const summaryEmail= document.getElementById("summaryEmail");
const summaryName= document.getElementById("summaryName");
const summaryQuantity= document.getElementById("summaryQuantity");


const formData=document.getElementById("collected-data")



function getFormData(){
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var duration = document.getElementById("duration").value;
    var activity = document.querySelector('select')
    var cooking = document.querySelector('input[name="cooking"]:checked').value;
    var color = document.getElementById("color").value;
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    return { adults: adults, children: children, duration: duration,activity: activity, cooking: cooking
    ,color: color, quantity: quantity,name: name, email: email };

    


}

function updateSummary(){
    const data= getFormData();

    summaryActivity.innerHTML=data.activity;
    summaryAdults.innerHTML=data.adults;
    summaryChildren.innerHTML=data.children;
    summaryColor.innerHTML=data.color;
    summaryCooking.innerHTML=data.cooking;
    summaryDuration.innerHTML=data.duration;
    summaryEmail.innerHTML=data.email;
    summaryName.innerHTML=data.name;
    summaryQuantity.innerHTML=data.quantity;

    document.getElementById("summarySection").style.display = "block";



}

function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellEmail = document.createElement("td");
    const cellDuration = document.createElement("td");
    const cellAdults = document.createElement("td");
    const cellChildren = document.createElement("td");
    const cellActivities = document.createElement("td");
    const cellColour = document.createElement("td");
    const cellKitEquip = document.createElement("td");
    const cellEqipacco = document.createElement("td");


    dataRow.appendChild(cellName);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellDuration);
    dataRow.appendChild(cellAdults);
    dataRow.appendChild(cellChildren);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellActivities);
    dataRow.appendChild(cellColour);
    dataRow.appendChild(cellKitEquip);
    dataRow.appendChild(cellEqipacco);


    const data =getFormData();


    cellName.innerHTML=data.name;
    cellEmail.innerHTML=data.email;
    cellAdults.innerHTML=data.adults;
    cellChildren.innerHTML=data.children;
    cellActivities.innerHTML=data.activity;
    cellColour.innerHTML=data.color;
    cellDuration.innerHTML=data.duration;
    cellEqipacco.innerHTML=data.quantity;
    cellKitEquip.innerHTML=data.cooking;

    formData.appendChild(dataRow)


    }











function navigateStep1() 
{
    location.replace("http://127.0.0.1:5500/Practice-folder/step2.html");
    updateProgressBar(1); 
}




function navigateStep2() 
{
    location.replace("http://127.0.0.1:5500/Practice-folder/step3.html");
    updateProgressBar(2); 
}

function previousStep2() 
{
    location.replace("http://127.0.0.1:5500/Practice-folder/practice.html");
    updateProgressBar(1); 
}






function navigateStep3()
 {
    location.replace("http://127.0.0.1:5500/Practice-folder/step4.html");
    updateProgressBar(3); 
   
}


function previousStep3()
 {
    location.replace("http://127.0.0.1:5500/Practice-folder/step2.html");
    updateProgressBar(2); 
}


function previousStep4() 
{
    location.replace("http://127.0.0.1:5500/Practice-folder/step3.html");
    updateProgressBar(3); 


}



