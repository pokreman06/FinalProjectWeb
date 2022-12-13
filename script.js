function onLoad() {
function displayVideo(id, nid, nid2) {
    let viewPort = document.getElementById(id);
    viewPort.style.display="block"; 
    document.getElementById(nid).style.display="none";
    document.getElementById(nid2).style.display="none";

}
if (window.matchMedia("(max-width: 700px)").matches){
    document.querySelectorAll("figure").forEach((wee)=>{wee.style.display=block;})
}

displayVideo("vid1", "vid2", "vid3");
document.querySelector('#t1').addEventListener("mouseover", ()=>{displayVideo("vid1", "vid2", "vid3");});
document.querySelector('#t2').addEventListener("mouseover", ()=>{displayVideo("vid2", "vid1", "vid3");});
document.querySelector('#t3').addEventListener("mouseover", ()=>{displayVideo("vid3", "vid1", "vid2");});
}
window.addEventListener('load', onLoad);