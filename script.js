function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('show');
  }

  // 點擊頁面其他地方時自動關閉選單
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
  }