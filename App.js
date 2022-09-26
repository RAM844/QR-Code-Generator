

let generateBtn = document.getElementsByClassName("submit")[0];

let data = document.getElementsByClassName("data")[0];

let qrImg = document.getElementById("img");

let main = document.getElementById("main");


generateBtn.addEventListener("click", () => {
    // qrImg.setAttribute("src", );
    if(data.value ==''){
        alert("Enter the data to generate code")
    }else{
        qrImg.style.display = "none";
        qrImg.style.display = "block";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.value}`
        main.style.paddingBlockEnd = "200px"; 
        main.style.marginTop = "8%"
    }
})
