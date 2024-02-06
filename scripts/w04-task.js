/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
    name: "Your Name",
    photo: "images/marioalb.jpg", // Replace with the actual path and name of your photo
    favoriteFoods: [
      'lomo saltado',
      'ceviche',
      'causa'
    ], // Replace with your favorite foods
    hobbies: [
      'play the guitar',
      'play the piano',
      'song'
    ], // Replace with your hobbies
    placesLived: []
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: 'cajabamba,Cajamarca',
      length: '16 years'
    },

    {
      place: 'lima,Peru',
      length: '6 years'
    },
    
    {
        place: 'arequipa, Peru',
        length: '1 year'
      }

  );
  // Add additional placesLived objects as needed
  // myProfile.placesLived.push({ place: 'Another Place', length: '2 years' });
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  document.querySelector('#photo').src = myProfile.photo;
  document.querySelector('#photo').alt = myProfile.name;
  
  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  