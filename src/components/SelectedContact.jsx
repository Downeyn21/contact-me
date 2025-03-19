import { useState, useEffect} from 'react'

const apiUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"


function SelectedContact({selectedContactId, setSelectedContactId}) {
console.log(selectedContactId)
const [contact, setContact] = useState([])

console.log("HELLOOO ==>", contact)

useEffect(() => {
    async function fetchapi() {
        try {
            const response = await fetch(`${apiUrl}${selectedContactId}`)
            const result = await response.json();

            setContact(result)
            
            
            console.log("HEY MOM IM ON LIVE TV!!! =>", result)
        } catch (error) {
            console.error(error)
        }
    }
    fetchapi()
    
    
}, []);
 
 
 return (

         <table>
         <thead>
         <tr>
         <th colSpan={4}>{contact.name}</th>
         </tr>
         </thead>
         <tbody>
         <tr>
         <th>UserName => </th>
         <td colSpan={3}>{contact.username}</td>
         </tr>
         <tr>
         <th>Email => </th>
         <td colSpan={3}>{contact.email}</td>
         </tr>
         <tr>
         <th>Phone => </th>
         <td colSpan={3}>{contact.phone}</td>
         </tr>
         <tr>
         <th>website</th>
         <td colSpan={3}>{contact.website}</td>
         </tr>
         <tr>
         <th colSpan={4}>Address</th>
         </tr>
         <tr>
         <th>Street</th>
         <th>Suite</th>
         <th>City</th>
         <th>Zipcode</th>
         </tr>
         <tr>
         <td>{contact.address?.street}</td>
         <td>{contact.address?.suite}</td>
         <td>{contact.address?.city}</td>
         <td>{contact.address?.zipcode}</td>
         </tr>
         <tr>
         <td colSpan={4}>
         <button onClick={() => {setSelectedContactId(null)}}>Go Back => => </button>
         </td>
         </tr>
         </tbody>
         </table>
        )
    }
    


    export default SelectedContact