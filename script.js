const input = document.querySelector("input");
const qrImage = document.querySelector("#qrImage");
const btn = document.querySelector("button");

btn.addEventListener("click",()=> {
    if(input.value == ''){

    }else{
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ `${input.value}`;
        qrImage.style.display = "block";
        input.value = '';
    }
})