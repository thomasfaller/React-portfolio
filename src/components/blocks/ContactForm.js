import React from 'react';

 const ContactForm = {
  render() {
    return(
      <div>
        <form>
          <label>
            Name:
            <input type="text"/>
          </label>
          <label>
            Email:
            <input type="email"/>
          </label>
          <label>
            Message:
            <textarea type="text"/>
          </label>
        </form>
      </div>
    )
  }
}


export default ContactForm