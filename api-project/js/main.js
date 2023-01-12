import "./style.css";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("mint")) {
    document.body.classList.add("cozy");
    document.body.classList.remove("mint");
  } else {
    document.body.classList.add("mint");
    document.body.classList.remove("cozy");
  }
});
