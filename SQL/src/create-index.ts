import { getClient } from "./utils";

async function addIndex() {
    const client = await getClient();
    
    const createIndexQuery = 'CREATE INDEX idx_todos_user_id ON todos(user_id)';
    await client.query(createIndexQuery);
    
    console.log("Index added successfully on user_id column of todos table!");
}

addIndex();
