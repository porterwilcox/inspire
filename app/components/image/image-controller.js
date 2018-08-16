import ImageService from "./image-service.js";


let imageService = new ImageService
let date = new Date
let index
export default class ImageController {
    constructor(){
        imageService.getImage(drawImage)
    }
}

function drawImage(imageArr) {
    index = date.getDate() - 1
    document.body.style.backgroundImage = `url(${imageArr[index].url})`
}

