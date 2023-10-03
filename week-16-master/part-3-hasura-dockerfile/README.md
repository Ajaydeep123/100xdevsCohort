
docker-compose up
npx hasura-cli console    
-inside hasura folder
psql -h localhost -p 4446  -U user -d reef_dev

You wil notice there is a race between pg and hasura
