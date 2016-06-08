var movies = new XMLHttpRequest();

movies.onreadystatechange = x;
movies.open('GET','http://www.omdbapi.com/?s=minions', true);
movies.send();
console.log("test, one")



 function x (){
  console.log('HELLO, CAN I GET HERE?')
  if(movies.readyState === 4){
    if(movies.status<400){
  // var request = movies.request();
  console.log('request work?')
  // console.log(request)
  var results = JSON.parse(movies.responseText);
  console.log(results.Search);


for(var i=0;i<results.length;i++){
  var createimg = document.createElement('img');
  var createP = document.createElement('p')
  var getEl = document.getElementById('center_column');
  if (results.Search[i].Poster === "N/A"){
    createimg.setAttribute("src","images/no_image.png")
  }
  else{
    createimg.setAttribute("src",results.Search[i].Poster)
  }
  if (results.Search[i].Poster === results.Search[i].Poster){

    createP.innerHTML = results.Search[i].Title;
  }
  else{
    createP.innerHTML = "no title";
  }
  console.log(data.search[10].Poster);
  getEl.appendChild(createimg);
  getEl.appendChild(createP)
}
}
}
}
