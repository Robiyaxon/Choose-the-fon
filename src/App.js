// import React from 'react'
// import './App.css'

// const App = () => {
//  const handleEmojiClick= () =>{

//  }

//   return (
//     <div className='wrapper'>
//     <h1>Kayfiyatingizni tanlang</h1>
//     <div className='block'>
//     <button  className='btn' onClick={() =>handleEmojiClick ('😁','Quvongan')}>😁</button>
//     <button className='btn' onClick={() =>handleEmojiClick ('🥰','Mehribon')}>🥰</button>
//     <button className='btn' onClick={() =>handleEmojiClick ('😔','Hafa')}>😌</button>
//     <button className='btn' onClick={() =>handleEmojiClick ('😡','Jahildor')}>😡</button>
//     <button className='btn' onClick={() =>handleEmojiClick ('😢',"Yig'lagan")}>😢</button>
//     </div>
//      <div className='choose'>
//       <h1>Siz tanladingiz!</h1>
//       <p>😁</p>
//       <h1>Quvongan</h1>
//      </div>

//     </div>
//   )
// }



// Fon tanlash
// export default App

import React, { useState } from 'react'
 import './App.css'
 const App = () => {
   const [color, setColor] = useState('black')
   const [label, setLebal] = useState('black')
  const changeColor=(color, label)=>{
     setColor(color)
     setLebal(label)
  }
   return (
     <div className='Content' style={{backgroundColor:color }}>
       <h1>Fon rangini tanlang</h1>
      <button style={{ backgroundColor: 'green' }} onClick={() => changeColor('green', "Yashil")}>Yashil</button>
       <button style={{ backgroundColor: 'blue', border: 'blue' }} onClick={() => changeColor('blue', "Ko'k")}>Ko'k</button>
       <button style={{ backgroundColor: 'yellow', border: 'yellow' }} onClick={() => changeColor('yellow', "Sariq")}>Sariq</button>
      <button style={{ backgroundColor: 'orange', border: '1px solid orange' }} onClick={() => changeColor('orange', "Olov rang")}>Olov rang</button>
       <button style={{ backgroundColor: 'red', border: ' 1px solid black' }} onClick={() =>changeColor('red', "Qizil")}>Qizil</button>
 <p>
   {label}
 </p>
     </div>
  )
}

export default App




// import React from 'react'
// import './App.css'
// const App = () => {
//   return (
//     <div className='Hower_me'>
//     <button className='content'>Hower me!</button>

//     </div>
//   )
// }

// export default App