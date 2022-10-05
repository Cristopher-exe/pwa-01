//imagen de la pagina index.html
let img1 = document.getElementById("Imagenes/MazingerZ-1.png");
let img2 = document.getElementById("Imagenes/MazingerZ-2.png");

//Fetch con codigo de promesa simplificada.
fetch('Imagenes/MazingerZ-1.png')
.then(resp => resp.blob())
.then(image => {
    console.log(image);
    //Instancia para imagen 1
    var imgPath1 = URL.createObjectURL(image);
    img1.src = imgPath1;
});
//Fetch con codigo de promesa normal.
fetch('Imagenes/MazingerZ-2.png')
.then(resp => {
    return resp.blob();
})
.then(image => {
    console.log(image);
    //Instancia para imagen 2
    var imgPath2 = URL.createObjectURL(image);
    img2.src = imgPath2;
});