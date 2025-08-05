document.querySelector("button").onclick = function () {
  alert("Кнопка нажата!");
};

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/*лагинация таблицы*/
const buttons = document.querySelectorAll(".page-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("active"));
    if (!isNaN(this.textContent)) {
      this.classList.add("active");
    }
    // Здесь можно добавить логику перехода между страницами
  });
});


function myFunction() {
  // Объявить переменные
  var phrase = document.getElementById('search-text');
  var table = document.getElementById('info-table');
  var regPhrase = new RegExp(phrase.value, 'i');
  var flag = false;
  for (var i = 1; i < table.rows.length; i++) {
      flag = false;
      for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
          flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
          if (flag) break;
      }
      if (flag) {
          table.rows[i].style.display = "";
      } else {
          table.rows[i].style.display = "none";
      }
  }
}
