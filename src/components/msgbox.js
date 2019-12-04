import React from 'react';

const showInput = (msg) => {
   const p = document.getElementById('display');
   // p.innerHTML = msg;
   let textNode = document.createTextNode(msg);
   p.appendChild(textNode);
}

const sendMessage = () => {
   const msg = document.querySelector('#userMsg').value;
   showInput(msg);
   fetch('http://localhost:3000/secret', {
      method: 'POST',
      body: JSON.stringify({userMsg: msg}),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   })
}

const Msgbox = () => {
   return(
      <div className="container">
         <div className="column">
            <div className="field">
               <p className="control">
                  <input id="userMsg" className="input" type="text" placeholder="Input Message" />
               </p>
            </div>
         </div>
         <div className="column">
            <button className="button" onClick={() => sendMessage()}>Send Message</button>
         </div>
      </div>
   );
}

export default Msgbox;