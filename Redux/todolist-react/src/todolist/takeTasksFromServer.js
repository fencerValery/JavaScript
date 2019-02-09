


const takeTasksFromServer = () => {
    let initialState = [];
    // requesting tasks from the server
   return  fetch("https://repetitora.net/api/JS/Tasks?widgetId=1967&count=30", {
        method: "GET",
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accept': 'application/json'
        },
        node: 'cors'
    })
        .then(result => result.json())
        .then(data => {
            // variable for the initialization state
            initialState = {
                tasks: [...data]
            };
           return initialState;
        });

       
      
}

takeTasksFromServer().then(() => {

})

