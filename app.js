const f = document.querySelector(`#searchForm`);
f.addEventListener(`submit`, async (e) => {
       e.preventDefault();
       let searchTerm = f.elements.query.value;
       let response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
       //console.log(response.data[0].show.image.medium)  ;
       makeImg(response.data);
       let element = document.querySelector(`img`);
       element.parentNode.removeChild(element);
       //document.getElementById(f).reset()  ;
       let button1 = document.querySelector('#reset')
       button1.addEventListener('click', deleteimg())

})

let makeImg = (shows) => {
       for (let s of shows) {
              if (s.show.image) {
                     let img = document.createElement(`IMG`)
                     img.src = s.show.image.medium;
                     document.body.append(img);
              }
       }
}

const deleteimg = ()=> {
       const imgs = document.querySelectorAll('img')
       for (let img of imgs) {
           img.remove();
       }
}

