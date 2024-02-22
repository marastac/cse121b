
async function fetchCovidData() {
    const url = 'https://covid-19-tracking.p.rapidapi.com/v1/usa';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f1d83ff3bbmshef43ecbc963dd76p1e3ac9jsn50fb46e5b6e4',
        'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching COVID-19 data:', error);
      return null;
    }
  }
  
  
  fetchCovidData()
    .then(data => {
      console.log('Datos de COVID-19 en EE. UU.:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
  