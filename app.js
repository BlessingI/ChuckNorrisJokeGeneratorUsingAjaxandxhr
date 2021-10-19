document.querySelector('.get-jokes').addEventListener('click', loadjokes)

function loadjokes(e){
  const xhr = new XMLHttpRequest();
  const number = document.querySelector('input[type="number"]').value
  
  xhr.open('Get', `http://api.icndb.com/jokes/random/${number}`, true)
  
  xhr.onload = function(){
    if(this.status === 200){
      const chuckjokes = JSON.parse(this.responseText)
       console.log(chuckjokes)


      let output = ''

      if(chuckjokes.type === 'success'){
        chuckjokes.value.forEach(function(joki){
          output += `
              <li>${joki.joke}</li>      
          `;
        })

      } else {
        output += '<li> Somthing went wrong</li>'
      }


      document.querySelector('.jokes').innerHTML = output
      
      
    }
  }
  
  e.preventDefault()

  xhr.send()
}