import axios from 'axios'

//let usersURL = 'https://benefi-backend-production.up.railway.app/userprofiles/'
let transactionsURL = 'https://benefi-backend-production.up.railway.app/transactions/'

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

let test = async () => {
    let newTransaction = {
        to: 'Hope_Lewin6857@twipet.com',
        from: 'Priscilla_Weatcroft1245@sveldo.biz',
        currency: 'Bitcoin',
        usdAmount: 100,
        sentOn: new Date()
    }

    let deleted = await axios.delete(`${transactionsURL}/63692a1cba3b1d31a601e65d`)

    let response = await axios.post(transactionsURL, newTransaction)
    console.log (response.data._id)
}

test()
