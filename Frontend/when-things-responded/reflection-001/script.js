let upload = document.querySelector("#upload");
let input = document.querySelector("#file");
upload.addEventListener("click",function(){
    input.click();
});

input.addEventListener("change",function(e){
    const file = e.target.files[0];
    if(file){
        upload.textContent = e.target.files[0].name;
    }
});