const hilalGallery = document.querySelector('#hilal_gallery')

const galleryData = [
  {
    image: '../assets/images/gallery/230C3279-732C-410B-BF66-80ABA70E6ADC.jpg',
  },
  {
    image: '../assets/images/gallery/5B1235D0-A5EC-4409-ADBF-6B84ECB071FB.jpg',
  },
  {
    image: '../assets/images/gallery/A3AF7F9B-0413-4189-8463-4A1DC173ED60.jpg',
  },
  {
    image: '../assets/images/gallery/DSC00150.jpg',
  },
  {
    image: '../assets/images/gallery/DSC00642.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC00743.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC01333.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC01611.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC03735.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC04641.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC04645.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC05151.jpeg',
  },
  {
    image: '../assets/images/gallery/DSC08309.jpg',
  },
  {
    image: '../assets/images/gallery/DSC08352(1).jpg',
  },
  {
    image: '../assets/images/gallery/DSC_1351.jpg',
  },
  {
    image: '../assets/images/gallery/DSC_1576.jpg',
  },
  {
    image: '../assets/images/gallery/DSC_1939.jpg',
  },
  {
    image: '../assets/images/gallery/FSK08008.jpg',
  },
]
function getGalleryPhotos() {
  const data = galleryData.map((item) => {
    return `<div class="col-lg-4 col-md-6 col-sm-12 gallery-item"> 
      <a href="${item.image}"><img src="${item.image}"/></a>
  </div>`
  })
  hilalGallery.insertAdjacentHTML('beforeend', data.join(''))
}
getGalleryPhotos()
$('#gallery-banner__item').lightSlider({
  item: 1,
  loop: true,
  cssEasing: 'ease',
  easing: 'linear',
  prevHtml: "<i class='fas fa-arrow-left'></i>",
  nextHtml: "<i class='fas fa-arrow-right'></i>",
}),
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  })
