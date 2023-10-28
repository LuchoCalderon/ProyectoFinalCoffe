

function saveContact(){
    let nameC = document.getElementById("name");
    let emailC = document.getElementById("email");
    let messageC = document.getElementById("message");


    let contact = {
        name: nameC.value,
        email: emailC.value,
        message: messageC.value,

    }
    console.log(contact);

    let url= "http://localhost:3000/api/contacto";

    let params= {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    }
    fetch(url, params).then(response =>{
        console.log("response");
        console.log(response.json());

        if(response.status === 201){
            alert("created successfully");
        }else{
            alert("error");
        }
    });

    return true;
}

function getContacts(){


    let url = "localhost:8000/api/contact";
    let params = {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });

    return true;
}

export default saveContact ;
