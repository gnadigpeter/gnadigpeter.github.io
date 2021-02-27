let data1= {
    photo: 'images/malac1.jpg',
    title: 'Nyelves Malac',
    description: '"Megnyallak"'
}
let data2= {
    photo: 'images/malac2.jpg',
    title: 'Kitekintő',
    description: '"Ne egyélmeg"'
}
let data3= {
    photo: 'images/malac3.jpg',
    title: 'Vizi disznyó',
    description: '"Úgy csinálok mint egy hal"'
}
let data4= {
    photo: 'images/malac4.jpg',
    title: 'Füles malac',
    description: '"Segítség! Elsűlyedek!"'
}

let currentPhoto = 0;
let imagesData = [ data1,data2,data3,data4];


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $(`#photo-title`).html(imagesData[photoNumber].title);
    $(`#photo-description`).html(imagesData[photoNumber].description);
  }

loadPhoto(currentPhoto);
$('#RightArrow').click(() => {
    
  currentPhoto++;
  if (currentPhoto >= imagesData.length) {
      currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
})
$('#LeftArrow').click(() => {
    currentPhoto--;
    if(currentPhoto < 0){
        currentPhoto = 3;
    }
    loadPhoto(currentPhoto);
})




imagesData.forEach((item, index) => {
    $(`#ThumbnailKeret`).append(
    `<div class="box" data-index="${index}">
        <div class="title">${imagesData[index].title}</div>
        <img class="kep" id="${index}" data-index="${index}">
        
     </div>`
    );
    
    $(`#${index}`).attr('src', imagesData[index].photo);
  
  $(`.box`).click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    loadPhoto(indexClicked)
    currentPhoto = indexClicked;
  });
});


