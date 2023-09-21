import { Client } from 'pg';

export async function getClient() {
    const client = new Client("URL of db");
    await client.connect();
    return client;
}
