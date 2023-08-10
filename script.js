const accessKey = "DZsGCgczp6sedwmBfWjuFrc0PiITqx_gdvcNBkEcOgY";

const seachForm = document.getElementById("seachForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const showMoreButton = document.getElementById("showMoreButton");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        // const imageLink = document.createElement("a");
        // imageLink.href = result.links.html;
        // imageLink.target = "_blank";

        // imageLink.appendChild(image);
        
        searchResult.appendChild(image);
    });

    showMoreButton.style.display = "block";
}

seachForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
});

showMoreButton.addEventListener("click", ()=> {
    page++;
    searchImages()
})
