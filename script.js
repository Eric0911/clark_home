function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('show');
  }

// function changeImage() {
//   // const img = document.getElementById("myImage");
//   const img = document.getElementsByClassName("like_numbers");
//   const filename = img.src.split('/').pop();

//   if (filename === "like_20x20.png") {
//     img.src = "./image/heart_20x20.png";
//   } else {
//     img.src = "./image/like_20x20.png";
//   }
// }

  // 抓取所有有 toggle-img class 的圖片
  const toggleImages = document.querySelectorAll('.toggle-img');

  toggleImages.forEach(img => {
    img.addEventListener('click', () => {
      const currentSrc = img.src.split('/').pop();
      const img1 = img.getAttribute('data-img1').split('/').pop();
      const img2 = img.getAttribute('data-img2');

      img.src = (currentSrc === img1) ? img2 : img.getAttribute('data-img1');
    });
  });