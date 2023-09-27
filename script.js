const baseURL = "https://anapioficeandfire.com/api/";

const getAllData = () => {
  fetch(`${baseURL}/characters`, { method: "GET" })
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
    <div class="card" style="width: 18rem">
      <div class="card-body">
         <div class="card-title">Name:${i.name}</div>
         <div class="card-title">Gender:${i.gender}</div>
         <div class="card-title">Culture:${i.culture}</div>
         <div class="card-title">Born:${i.born}</div>
         <div class="card-title">Died:${i.died}</div>
         <div class="card-title">Father:${i.father}</div>
         <div class="card-title">Mother:${i.mother}</div>
         <div class="card-title">Spouse:${i.spouse}</div>
      </div>
     </div>
    `)
}
const errorHandler = (er)=>console.log(er)
getAllData()
