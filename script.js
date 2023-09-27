document.body.innerHTML=`
    <div class=fullscreen>
        <div class=image2> 
            <div class="allcards" id="cardsdata"></div>
        </div>   
    </div>
`
let emojis;
const getData=async()=>{

    try{
        const data=await fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars")
        emojis=await data.json();
        console.log(emojis)
        //allcards.innerHTML=""
        // emojis.map(key=>{
        //     displayemojis(key)
        // })

    }
    catch(error){
        emojis.innerHTML = "Input is " + error
    }
    

}
getData()



