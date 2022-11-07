import axios from 'axios'

let usersURL = 'https://benefi-backend-production.up.railway.app/userprofiles/'
let transactionsURL = 'https://benefi-backend-production.up.railway.app/transactions/'



let test = async () => {
    let usersURL = 'https://benefi-backend-production.up.railway.app/userprofiles/'
    let transactionsURL = 'https://benefi-backend-production.up.railway.app/transactions/'

    //The new transaction data is taken from the transaction form state
    //Below is just dummy data as an example
    let newTransaction = {
        to: 'Hope_Lewin6857@twipet.com',
        from: 'Priscilla_Weatcroft1245@sveldo.biz',
        currency: 'Bitcoin',
        usdAmount: 100,
        sentOn: new Date()
    }

    let response = await axios.post(transactionsURL, newTransaction)
    
    let usersFetch = await axios.get(usersURL)
    let users = usersFetch.data

    users.forEach((user) => {
        if (user.email === response.data.to) {
            axios.put(`${transactionsURL}/${response.data._id}/${user._id}`)
        }
        if (user.email === response.data.from) {
            axios.put(`${transactionsURL}/${response.data._id}/${user._id}`)
        }
    })
}

test()


//This function runs once for linking dummy data.
/*
let linkUsers = async ()=> {
    let usersFetch = await axios.get(usersURL)
    let transactionsFetch = await axios.get(transactionsURL)
    
    let users = usersFetch.data
    let transactions = transactionsFetch.data

    users.forEach((user) => {
        transactions.forEach((transaction) => {
            if (user.email === transaction.to) {
                axios.put(`${transactionsURL}/${transaction._id}/${user._id}`)
            }
            if (user.email === transaction.from) {
                axios.put(`${transactionsURL}/${transaction._id}/${user._id}`)
            }
        })
    })

}

linkUsers()
*/
