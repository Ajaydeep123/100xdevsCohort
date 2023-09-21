import { getClient } from "./utils";

async function getUsers() {
    const client = await getClient();
    
    const selectUsersText = 'SELECT * FROM users';
    const userRes = await client.query(selectUsersText);
    
    console.log("Users:");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserFromEmail(email: string) {
    const client = await getClient();
    
    const selectUserText = 'SELECT * FROM users WHERE email = $1';
    const userRes = await client.query(selectUserText, [email]);
    
    console.log("Single User detail:");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getTodosForUser(userId: number) {
    const client = await getClient();
    
    const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
    const todoRes = await client.query(selectTodosText, [userId]);
    
    console.log(`Todos for User ID ${userId}:`);
    for (let todo of todoRes.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    }
}

getUsers();

getUserFromEmail("ajaydeep@gmail.com")

const userIdToFetch = 1;
getTodosForUser(userIdToFetch);