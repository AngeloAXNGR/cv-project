const Contact = ({phoneNumber, email, linkedin, github, address}) =>{
  return(
    <div className="contacts">
      <h1>Contacts</h1>
      <div className="contacts-content">
        <div className="contacts-row">
          <h3>Phone Number:</h3>
          <p>{phoneNumber}</p>
        </div>
        <div className="contacts-row">
          <h3>Email:</h3>
          <p>{email}</p>
        </div>
        {linkedin !== '' && <div className="contacts-row">
          <h3>LinkedIn:</h3>
          <p>{linkedin}</p>
        </div>}

        {github !== '' && <div className="contacts-row">
          <h3>Github:</h3>
          <p>{github}</p>
        </div>}

        <div className="contacts-row">
          <h3>Address:</h3>
          <p>{address}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;

