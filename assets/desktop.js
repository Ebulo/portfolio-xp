let time = document.querySelector(".time");
time.innerHTML = new Intl.DateTimeFormat("en-IN", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
}).format(new Date());
time.setAttribute(
  "title",
  new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date())
);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let right_click = document.getElementById("right-click");
  right_click.style.top = event.clientY + "px";
  right_click.style.left = event.clientX + "px";
  console.log(event.clientX, event.clientY);
  right_click.hidden = !right_click.hidden;
});

document.querySelector(".desktop").addEventListener("click", function (e) {
  let right_click = document.getElementById("right-click");
  let start_menu = document.getElementById("start-menu");
  right_click.hidden = true;
  start_menu.hidden = true;
});

// document.querySelector("body").addEventListener("click", function (e) {
//   let start_menu = document.getElementById("start-menu");
//   start_menu.hidden = true;
// });

document.querySelector(".icon").addEventListener("click", function (e) {
  document.getElementById("click_sound").play();
});

document.querySelector(".start-button").addEventListener("click", function (e) {
  let start_menu = document.getElementById("start-menu");

  start_menu.hidden = !start_menu.hidden;
});

let timeSetter = setInterval(() => {
  time.innerHTML = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date());
  time.setAttribute(
    "title",
    new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date())
  );
}, 60000);

document.querySelector(".desktop").onclick = function () {
  document.querySelectorAll(".icon").forEach((e) => {
    e.classList.remove("selected");
  });
};

document.querySelectorAll(".icon").forEach((icon) => {
  icon.onclick = function () {
    setTimeout(() => {
      document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected");
      });
      this.classList.add("selected");
    }, 1);
  };
});

document.querySelector(".max").onclick = function () {
  document.querySelector(".window").classList.toggle("maximized");
};

document.querySelector(".min").onclick = function () {
  document.querySelector(".readme").classList.toggle("active");
  document.querySelector(".window").classList.toggle("minimized");
};

document.querySelector(".readme").onclick = function () {
  document.querySelector(".readme").classList.toggle("active");
  document.querySelector(".window").classList.toggle("minimized");
};

document.querySelector(".cls").onclick = function () {
  document.querySelector(".readme").style.display = "none";
  document.querySelector(".window").style.display = "none";
};

// PORTFOLIO
document.querySelector(".documents").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  window.open("https://ebulo.github.io/portfolio/");
};

document.querySelector(".resume").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  window.open(
    "https://drive.google.com/file/d/13vaBzhNqmid3QL2cC5lryoq0H3kgRiky/view"
  );
};

document.querySelector(".my-computer").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  window.open("https://github.com/ebulo/");
};

document.querySelector(".my-network").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  window.open("https://www.linkedin.com/in/bishant-nayak-081a25191/");
};

document.querySelector(".folder").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  window.open(
    "https://unsplash.com/photos/a-person-wearing-a-white-cloak-and-sunglasses-Sqv-q20nV_Y"
  );
};

document.querySelector(".recycle-bin").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  alert("Cleared all Secrets Successfully");
};

document.querySelector(".note-pad").ondblclick = function () {
  document.getElementById("click_sound").play();
  setTimeout(() => {
    this.classList.remove("selected");
  }, 2);
  document.querySelector(".readme").style.display = "initial";
  document.querySelector(".window").style.display = "initial";
  document.querySelector(".readme").classList.add("active");
  document.querySelector(".window").classList.remove("minimized");
};

document.querySelector("textarea").value = localStorage.getItem("txtFileData")
  ? localStorage.getItem("txtFileData")
  : "Hello World!\n\nHow about you type something.\n\nAuto Save is enabled";

function saveTextFile() {
  let value = document.querySelector("textarea").value;
  localStorage.setItem("txtFileData", value);
}

dragWindow(document.querySelector(".window"));
// dragWindow(document.querySelector(".icon"));
function dragWindow(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  document.querySelector(".title-bar").onmousedown = dragging;

  function dragging(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = draggedWindow;
  }

  function draggedWindow(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
