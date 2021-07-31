const searchForm = document.querySelector("#search-box span");
const searchBox = document.getElementById("search-box");

function changeSearch(event){
    event.preventDefault();
    if(searchForm.classList[0] === "Google"){
        searchForm.innerText = "N";
        searchBox.action = "http://search.naver.com/search.naver";
        searchForm.classList.remove("Google");
        searchForm.classList.add("Naver");
    } else {
        searchForm.innerText = "G";
        searchBox.action = "http://www.google.co.kr/search";
        searchForm.classList.remove("Naver");
        searchForm.classList.add("Google");
    }
}

searchForm.addEventListener("click",changeSearch);