
let creatediv;
let urlinp;
let spans=document.getElementById("spans");
function createboxes(){
 urlinp=document.getElementById("urlinp");
if(urlinp.value!=""){
    urlinp.style.border="none";
    spans.innerText="";
        shorturl(urlinp.value); 
        }
 else{
    urlinp.style.border="3px solid red";
    spans.innerText="Enter a valid url";

 }
}

let shorturl=function(url){
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let shortlink=data.result.short_link;
            createle(shortlink);  
    })  
}

function createle(shortlink){
    creatediv=document.createElement("div");
        creatediv.setAttribute("class", "ele")
        createurl.appendChild(creatediv);
    console.log("a");
    console.log(shortlink);
    console.log(creatediv)
    //let ptag=document.createElement("p");
    creatediv.innerHTML=`
    <div id="textdiv">
    <p class="userlink">${urlinp.value}</p>
    </div>
    <p id="getlink">${shortlink}</p>
    <button class="copied" onclick="copiedtext(this)">Copy</button>` ;
    urlinp.value="";
}

function copiedtext(item) {
    let getlink=item.previousElementSibling;
	navigator.clipboard.writeText(getlink.innerText);
    item.innerText="Copied";
    item.style.backgroundColor="black";
    setTimeout(copytext,2000,item)
}
function copytext(item){
    item.innerText="Copy";
    item.style.backgroundColor="#2BD0D0";
}