import React from 'react'

let Contact=()=>{
    return(
        <div>
            <h1>How can we help you</h1>
            <form id="idfrom">
                <label ><b> Name</b></label><br/>
                <input type="text" id="fname"  /><br/>
                <label><b>Email</b></label><br/>
                <input type="email" id="email" /><br/>
                <label><b>Phone</b></label><br/>
                <input type="number" id="pnum" /><br/>
                <label><b>Message</b></label><br/>
                <textarea from="idfrom"  />           </form>
        </div>
    )
}
export default Contact;