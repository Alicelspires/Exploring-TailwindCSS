let galleryContainer = document.querySelector("#gallery");

async function getImages(page){
    try{
        let res = await fetch(`https://picsum.photos/v2/list?page=${page+1}&limit=20`);
        let data = await res.json();

        return data;
    }catch(e){
        console.log('ERRO!', e);
    }
}

async function scrollImages(){
    let imagePlaces;
    for(let i = 0; i < 10; i++){

        let data = await getImages(i+2)
        let divImages = '';
        imagePlaces = document.createElement('div');
        imagePlaces.className = 'imagePlaces h-64';
        
        data.forEach((img, index) => {
            let imgItem = `<img class="item w-96 h-64" style="--item:${index+1};" src="${img.download_url}" alt="image${index}">`

            divImages += imgItem;
        })

        imagePlaces.innerHTML += divImages;
        galleryContainer.appendChild(imagePlaces)
    }

}
scrollImages()