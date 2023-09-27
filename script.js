const baseURL = " http://calapi.inadiutorium.cz/api/v0/en/calendars";

const getAllData = async() => {
  fetch(`${baseURL}`, { method: "GET" })
  .then((data) => data.json())
    .then((data) => {
        console.log(data);
        
      
        populateGridData(data);
      })
    .catch((er) => errorHandler(er));
};

const populateGridData = (data) => {
    document.body.innerHTML=
    
    data.map((i)=>`
    <div class=fullscreen>
        <div class=image2> 
            <div class="allcards" id="cardsdata"></div>
        </div>   
    </div>
    `)
}
const errorHandler = (er)=>console.log(er)
getAllData()



