import ContactRow from "./ContactRow";
import React from "react";
import { useState, useEffect } from "react";
import '../App.css'

//=========================API CONST========================

const apiUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

//===========================test contacts==================

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]
  
//==========================main compontent START==================

function ContactList({setSelectedContactId}) {
  const [count, setCount] = useState(0)
  const [contact, setContact] = useState(dummyContacts)
    console.log(contact)
//====================Grabing the api===========================

  useEffect(() => {
        async function grabData() {
            try {
                const response = await fetch(apiUrl)
                const result = await response.json()
                console.log(result)
                return setContact(result)
                
            } catch (error) {
                console.error(error)
            }
            
        }      
        grabData()
     
  }, []);

    return ( 
        <>
            <table>
                <thead>
                    <tr>
                        
                        <th colSpan={3}>Contact Me 😏</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {contact.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact}  setSelectedContactId={setSelectedContactId}/>
                    })}
                </tbody>
            </table>
        </>
     );
}

export default ContactList;