//dropdown
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

//Hero slide

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

//todos

  // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByClassName("listtodo");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInputTodos").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInputTodos").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }

    //Filter table
    function myFilter() {
      // Declare variables
      var input, filter, table, tr, td, i;
      input = document.getElementById("myFilterInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

    //accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    }

    //chargebattery
    function chargebattery() {
      var a;
      a = document.getElementById("div1");
      a.innerHTML = "&#xf244;";
      setTimeout(function () {
          a.innerHTML = "&#xf243;";
        }, 1000);
      setTimeout(function () {
          a.innerHTML = "&#xf242;";
        }, 2000);
      setTimeout(function () {
          a.innerHTML = "&#xf241;";
        }, 3000);
      setTimeout(function () {
          a.innerHTML = "&#xf240;";
        }, 4000);
    }
    chargebattery();
    setInterval(chargebattery, 5000);
