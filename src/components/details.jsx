import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const allColor = [
    {
        id: "1" ,
        color: "blue"
    },
    {
        id: "2" ,
        color: "green",
    },
    {
        id: "3" ,
        color: "yellow"
    },
    {
        id: "4" ,
        color: "pink"
    },
]

const texts = [
    {
        text: "Main Balance",
        number: "0.00",
    },
    {
        text: "Activation Balance",
        number: "0.00",
    },
    {
        text: "My Direct",
        number: "2",
    },
    {
        text: "My Team",
        number: "6",
    },
    {
        text: "Total Income",
        number: "35",
    },
    {
        text: "Direct Income",
        number: "10",
    },
    {
        text: "Matching Income",
        number: "5",
    },
    {
        text: "Trading Level Income",
        number: "0",
    },
    {
        text: "Salary Income",
        number: "0",
    },
    {
        text: "Fund Received",
        number: "4500",
    },
    {
        text: "Pending Withdrawal",
        number: "10",
    },
    {
        text: "Total Withdrawal",
        number: "25",
    },
    {
        text: "Binary Legs",
        number: "L : 1 | R : 3187",
    },
    {
        text: "Binary Legs Carry",
        number: "L : 0 | R : 3186",
    },
    {
        text: "Total Pair",
        number: "1",
    },
    {
        text: "Current Month Business",
        number: "L : 0 | R : 0",
    },
    


]


const randomColor = () => {
    return allColor[(allColor.length * Math.random()) << 0].color
}

const allCards = [];

for (let i = 0; i < 16; i++) {
    const color = randomColor();
    allCards.push(
    <div className="cards">
        <div className="text-part">
            <div className="heading">
                {texts[i].text}
            </div>
        <h1 className={color + "-1"}>
            {texts[i].number}
        </h1>
        </div>
        <div className="logo-part">
            <div className= {color + " " + "logo" } >
                <AttachMoneyIcon style={{ color: "white" }}/>
            </div>
        </div>
    </div>
    )
}



const details = () => {
  return (
    <>

   
        <div className='details'>
            {allCards}
        </div>
    </>
  )
}

export default details