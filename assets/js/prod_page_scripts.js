var rjs_cursor = document.getElementById("rjs_cursor"); //Getting the cursor
var body = document.querySelector("body"); //Get the body element

//Functions for showing and hiding the cursor
//They are referenced the
function rjs_show_cursor(e) {
  //Function to show/hide the cursor
  if (rjs_cursor.classList.contains("rjs_cursor_hidden")) {
    rjs_cursor.classList.remove("rjs_cursor_hidden");
  }
  rjs_cursor.classList.add("rjs_cursor_visible");
}

function rjs_hide_cursor(e) {
  if (rjs_cursor.classList.contains("rjs_cursor_visible")) {
    rjs_cursor.classList.remove("rjs_cursor_visible");
  }
  rjs_cursor.classList.add("rjs_cursor_hidden");
}

function rjs_mousemove(e) {
  //Function to correctly position the cursor
  rjs_show_cursor(); //Toggle show/hide

  var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
  var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

  var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
  var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
  var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
  rjs_cursor.style.transform = rjs_cursor_pos;
}

//Eventlisteners
window.addEventListener("mousemove", rjs_mousemove); //Attach an event listener
body.addEventListener("mouseleave", rjs_hide_cursor);

//Hover behaviour
function rjs_hover_cursor(e) {
  rjs_cursor.classList.add("rjs_cursor_hover");
}
function rjs_unhover_cursor(e) {
  rjs_cursor.classList.remove("rjs_cursor_hover");
}

document.querySelectorAll(".video-reel").forEach((item) => {
  //A custom class
  item.addEventListener("mouseover", rjs_hover_cursor);
  item.addEventListener("mouseleave", rjs_unhover_cursor);
});

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  console.log("medabox disabled");
} else {
  MediaBox(".mediabox", { rel: "0" });
}