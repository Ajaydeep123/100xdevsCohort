import { Chain } from "./zeus";

const chain = Chain("http://localhost:4000/graphql", {
    headers: {
        authorization: "Bearer 123123",
        "Content-Type": "application/json"
    }
});

async function send() {
    try {
        const response = await chain("mutation")({
            createUser: [{
                input: {
                    email: "harkirat1@gmail.com",
                    firstname: "harkirat",
                    lastname: "singh"
                }
            }, {
                id: true,
                email: true
            }]
        })
        console.log(response.createUser)   
    }  catch(e) {
        console.log(e);
    }
}

send();
