# beneFI-backend

## Description:

- The beneFI-API maintains track of user profile data and transactions conducted on the beneFI platform. This database contains routes with full CRUD functionality.

## Deployed Link

- The beneFI-API is deployed and hosted by the railyway app. The link to the root of the deployed API can be found [here](https://benefi-backend-production.up.railway.app/)

## Endpoints

### https://benefi-backend-production.up.railway.app/transactions :

| CRUD Method                            |                                       Endpoint                                       |                           Error Handling |
| :------------------------------------- | :----------------------------------------------------------------------------------: | ---------------------------------------: |
| Get All Transactions:                  |            https://benefi-backend-production.up.railway.app/transactions/            |            Returns 500 error or res.json |
| Get transaction by ID:                 |          https://benefi-backend-production.up.railway.app/transactions/:id           |            Returns 404 error or res.json |
| Post new Transaction:                  |            https://benefi-backend-production.up.railway.app/transactions/            | Returns 201 if successful else 500 Error |
| Put Links Transaction to User profile: | https://benefi-backend-production.up.railway.app/transactions/:transactionId/:userId |            500 Error or returns res.json |

<br/>
<br/>
<br/>



### https://benefi-backend-production.up.railway.app/userProfiles :

| CRUD Method            |                             Endpoint                              |                           Error Handling |
| :--------------------- | :---------------------------------------------------------------: | ---------------------------------------: |
| Get All Users:         |  https://benefi-backend-production.up.railway.app/userProfiles/   |            Returns 500 error or res.json |
| Get User by ID:        | https://benefi-backend-production.up.railway.app/userProfiles/:id |            Returns 404 error or res.json |
| Post Creates new User: |  https://benefi-backend-production.up.railway.app/userProfiles/   | Returns 201 if successful else 500 Error |
| Put Edit User:   | https://benefi-backend-production.up.railway.app/userProfiles/:id |            500 Error or returns res.json |
| Delete Removes User:   | https://benefi-backend-production.up.railway.app/userProfiles/:id |            500 Error or returns res.json |