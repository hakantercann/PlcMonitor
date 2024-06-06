const body = document.querySelector("body");
sidebar = body.querySelector(".sidebar");
toggle = body.querySelector(".toggle");
search = body.querySelector(".search-box");
modeSwitch = body.querySelector(".toggle-switch");
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close")
});

search.addEventListener("click", () => {
    
    sidebar.classList.remove("close")
})
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    }
    else{
        modeText.innerText = "Dark Mode"
    }
});
var jsonTags
window.onload = GetComponentData();
async function GetComponentData(){
    const response = await fetch("http://localhost:55000/api/SetupTags");
    const value = await response.json();
    jsonTags =value
    var sec = document.getElementById("announceBody");
    var out = "<br></br><br></br>"
    value.forEach(element => {
        console.log(element)
        out += `<div>`;
        out += `<strong>${element.labelName}</strong><br></br>`
        if(element.labelType === 1)
             {
                
             out += `<p id="${element.tagAddress}"> - - - </p>`;
             }

        out += `</div><br></br><br></br>`;
    });
    sec.innerHTML = out
}
setInterval(async () => {
    const configID = 6;
    const queryString = new URLSearchParams({
        configId: configID,
        jsonString: JSON.stringify(jsonTags)
    }).toString();
    const response = await fetch(`http://localhost:55000/api/Connectivity?${queryString}`);
    if (response.ok) {
        const value = await response.json();
        console.log(value)
        value.forEach(element => {
            const doc = document.getElementById(element.name);
            if (doc) {
                doc.innerText = element.obj;
            }
        });
    } else {
        console.error('Error fetching data:', response.statusText);
    }
}, 200);