//In this assignment al be displaying content that allows a guest or customer to see 
//the available movies and the tickets that are remaining. When lets say we click a title
// it should show us the movy details and ticket information.
//first since we are accessing data from the server lets begin with
//first
//lets start by declaring a variable that will have our link that can access the server
const link = 'http://localhost:3000/films/'
//lets now call all the dom elements that will help us access data
const filmInfo = document.getElementById('film-info') 
const showtime = document.getElementById('showtime')    
const filmItem = document.querySelector('.film-item') 
const poster = document.getElementById('poster')   
const film = document.getElementById('films')     
const title = document.getElementById('title')    
const runtime = document.getElementById('runtime')     
const button = document.getElementById('buy-ticket')    
const buttonDiv = document.querySelector('.extra-content')   
const tickets = document.getElementById('ticket-num')  
//the addEventListener allows us to load the content that we called to be accessed
document.addEventListener('DOMContentLoad' , firstMoviedetails()) 
//lets start by calling a function that will access data of the first movie
//accesses data from the server
function firstMoviedetails(){   
   fetch('http://localhost:3000/films/1')
     .then(res => res.json())
     .then(data =>  Moviesinformation(data))
     allMovies()
     }
//lets acquire data of all the movies from our server

function allMovies() {                  
    fetch(link)
    .then((res) => res.json())             
    .then((data) => renderMovies(data))    
}
function renderMovies(movie) {   
    // the server is running the data acquired should
     movie.forEach((movie) => {              
      //create an element list
      const li = document.createElement('li')     
       film.appendChild(li)     
       //below allows us to access the list from the film-item that we had called                     
      li.className = "film-item"                       
       li.innerHTML = movie.title                      
       filmItem.innerText = ""                          
       film.style.cursor = 'pointer'                   
       li.addEventListener('click', () => {            
        button.innerText = "Buy Ticket";               
        button.className = "ui purple button";         
        Moviesinformation(movie)                       
          
          })
      
    })


}
//finally lets add an events listener that updates the user on ticket details

       button.addEventListener("click", (e) => {               
      
        e.preventDefault();                                      
        let ticketsLeft = document.getElementById('ticket-num').innerText        
            
        
        if(parseInt(ticketsLeft, 11) === 0){          
          button.innerText = "oops! Sold Out";            
          button.className = 'sold-out'           
             
        }
        else{
          (ticketsLeft > 0) ? document.getElementById('ticket-num').innerText -= 1 : 0  
        }
      }

       )
      
//lets call the moviesinfo function that displays poster image,movy title,movie runtime,
//movy description,showtime and the tickets that are present
function Moviesinformation(movie) {
   
        poster.src = movie.poster              
        title.innerHTML = movie.title           
        runtime.innerHTML = movie.runtime      
        filmInfo.innerHTML = movie.description    
        showtime.innerHTML = movie.showtime         
        tickets.innerText = movie.capacity - movie.tickets_sold     


}
//end


      





    

  

 
    


    
