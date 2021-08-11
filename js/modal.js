var start_btn = document.getElementById("start-btn");
var start_menu = document.getElementById("start-menu");
var close_files = document.getElementById("close-files");
var files_btn = document.getElementById("files-btn");
var files = document.getElementById("files");
var toolbar = files.querySelector(".toolbar");

start_btn.onclick = function () {
    start_menu.style.display = "block";
}

files_btn.onclick = function () {
    files.style.display = "block";
}

close_files.onclick = function () {
    files.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == start_menu){
        start_menu.style.display = "none";
    }
}

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(files);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    files.style.left = `${leftVal + movementX}px`;
    files.style.top = `${topVal + movementY}px`;
  }
    toolbar.addEventListener("mousedown", ()=>{
    toolbar.classList.add("active");
    toolbar.addEventListener("mousemove", onDrag);
  });
  document.addEventListener("mouseup", ()=>{
    toolbar.classList.remove("active");
    toolbar.removeEventListener("mousemove", onDrag);
  });