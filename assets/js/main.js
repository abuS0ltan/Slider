var item=document.querySelectorAll(".item img");
var slider = document.getElementById("slider");
var closeBtn =document.getElementById("close");
var sliderImg=document.getElementById("sliderImg");
var prevBtn=document.getElementById("prev");
var nextBtn=document.getElementById("next");
var curentIndex;
var number=document.getElementById("number");
var addImgBtn=document.getElementById("addImgBtn");
var itemsList=document.getElementById("itemsList");
var url;
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click",function(e){
        slider.style.display="flex";
        sliderImg.src=item[i].src;
        curentIndex=i;
        number.innerHTML=`${curentIndex+1}/${item.length}`;
        console.log(e.target)
    })
}
closeBtn.addEventListener("click",function(){
    slider.style.display="none";
})
prevBtn.addEventListener("click",function(){
    curentIndex--;
    changeImg();
})
nextBtn.addEventListener("click",function(){
    curentIndex++;
    changeImg();
})
function changeImg(){
    if(curentIndex>item.length-1){
        curentIndex=0;
    }
    else if (curentIndex<0){
        curentIndex=item.length-1;
    }
    sliderImg.src=item[curentIndex].src;
    number.innerHTML=`${curentIndex+1}/${item.length}`;
}
addImgBtn.addEventListener("click",function(){
    url=window.prompt("Plese insert the image url");
    addImg();
})
function addImg(){
    addNewImgHtmlText();
    addEventAfterAddImage();      
}
function addNewImgHtmlText() {
    itemsList.childNodes[1].innerHTML=itemsList.childNodes[1].innerHTML+`
    <div class="col-4 item">
        <img src="${url}" alt="">
    </div>
    `;
}
function addEventAfterAddImage() {
    item=document.querySelectorAll(".item img");
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener("click",function(){
            slider.style.display="flex";
            sliderImg.src=item[i].src;
            curentIndex=i;
            number.innerHTML=`${curentIndex+1}/${item.length}`;
        })
    }
}
//key
document.addEventListener("keydown",function(e){
    if(e.key=="ArrowRight"){
        curentIndex++;
        changeImg();
    }
    else if (e.key=="ArrowLeft"){
        curentIndex--;
        changeImg();
    }
    else if(e.key=="Escape"){
        slider.style.display="none";
    }
});
