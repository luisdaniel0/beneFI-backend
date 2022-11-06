import axios from 'axios'

let usersURL = 'https://benefi-backend-production.up.railway.app/userprofiles/'
let transactionsURL = 'https://benefi-backend-production.up.railway.app/transactions/'

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
