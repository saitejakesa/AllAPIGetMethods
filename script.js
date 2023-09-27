const baseURL = " https://api.gameofthronesquotes.xyz/v1/random";

const getAllData = () => {
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
    
    `
    <h2>Refresh the browser to get new quote</h2>
    <div class="card" style="width: 18rem">
      <div class="card-body">
         <div class="card-title">Name:${data.sentence}</div>
         <div class="card-title">Gender:${data.character.name}</div>
         <div class="card-title">Culture:${data.character.slug}</div>
      </div>
     </div>
    `
}
const errorHandler = (er)=>console.log(er)
getAllData()