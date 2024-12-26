const header = document.querySelector("header");

let scrollHeight = 0; //스크롤 위치값 넣을 변수

window.addEventListener("scroll", () => {
    if(scrollHeight < window,scrollY){
        hide()// 숨기는 함수실행
    }else {
       show() // 헤더 보여짐
    }
    scrollHeight - window.scrollY
});

function hide(){
    header.classList.add("hide");
}

function show(){
    header.classList.remove("hide");
}