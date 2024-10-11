changeAll();

setInterval(() => {
  changeAll();
}, 5000);

function changeAll() {
  let imgs = document.getElementsByTagName("img");

  for (img of imgs) {
    img.src =
      "https://media.tenor.com/images/d681ed3be00b5bfa1e3d50203c493b93/tenor.gif";
  }
}
