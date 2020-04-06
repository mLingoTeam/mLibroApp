


const req = {
    setTasks
}
     function getTasks() {

        const token = localStorage.getItem("status");

        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"token": token})
        };


        return fetch(`https://obscure-depths-75684.herokuapp.com/` + `https://mlibro-api.herokuapp.com/refresh`, requestOptions)
        .then(function(response) {
          if(response.status == 403){
            return false;
        }
            return response.json();
          }).then(function(data) {
            return data
          });

    }

     async function setTasks(){
        const data = await getTasks();
        if(data == false){
          alert("Token Wygasl!");
          return;
      }
        const resolved_data = Promise.resolve(data);
        resolved_data.then(e=> localStorage.setItem('today', JSON.stringify(e.zadania.na_dzisiaj)));
        resolved_data.then(e=> localStorage.setItem('all', JSON.stringify(e.zadania.pozostale)));
    }

    export default req;