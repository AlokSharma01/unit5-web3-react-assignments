import React, { useEffect,useState } from 'react'

export const Card = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
    
        getCard();
      
    }, [])

    const getCard =()=>{

        fetch(` http://localhost:3001/employee`)

        .then((res)=> res.json())
        .then((res)=>setCard(res))
    }

    console.log(card)
  return (
    <div>

        {card.map((item)=>(

            <div key={item.id}>

                <table>
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>isMarried</th>
                        </tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.department}</td>
                            <td>{item.salary}</td>
                            <td>{item.isMarried}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        ))}

            
    </div>
  )
}
