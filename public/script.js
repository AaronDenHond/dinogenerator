async function getDinoName() {
  const response = await fetch("/dinoname");
  const data = await response.json();
  const dinoName = data[0].join(" ");
  document.querySelector("#dinoName").innerText = dinoName;
  /*  console.log(data);
  console.log(data[0].join(" ")); */
}

async function getDinoImage() {
  const response = await fetch("/dinoimage");
  const data = await response.json();
  //console.log(data.value[0].webSearchUrl); wrong url and file size too big use thumbnail instead
  let dinoImage =
    data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl;
  console.log(dinoImage);
  if (document.querySelector("#dinoImage") !== null) {
    document.querySelector("#dinoImage").remove();
  }

    //no else here or this code will only trigger if if condition not fulfilled, we want it to trigger every time we press.  
    let image = document.createElement("img");
    image.src = dinoImage;
    image.id = "dinoImage";
    document.querySelector(".generator").appendChild(image);
  
}

const dinoButton = document.querySelector("#dinoBtn");
dinoButton.addEventListener("click", () => {
  getDinoName();
  getDinoImage();
});
