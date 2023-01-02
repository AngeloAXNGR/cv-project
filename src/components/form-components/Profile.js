const Profile = ({handleChange, handleImage, formData}) =>{
  return(
    <div className="profile-form">
      <h2>Personal Information</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={(e) => handleChange(e)}
      />
      <input 
        type="text" 
        name="title"
        value={formData.title}
        placeholder="Applicant Title"
        onChange={(e) => handleChange(e)}
      />
      <input 
        type="file" 
        name="profilePicture"
        // value={formData.profilePicture}
        onChange={(e) => handleImage(e)}
      />
      <input 
        type="tel" 
        name="phone"
        value={formData.phone}
        placeholder="Phone Number"
        onChange={(e) => handleChange(e)}
      />
      <input 
        type="email" 
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={(e) => handleChange(e)}
      />
      <input 
        type="text" 
        name="linkedin"
        value={formData.linkedin}
        placeholder="Linkedin Profile"
        onChange={(e) => handleChange(e)}
      />
      <input 
        type="text" 
        name="address"
        value={formData.address}
        placeholder="Home Address"
        onChange={(e) => handleChange(e)}
      />
      <textarea 
        maxLength="300"
        name="about" 
        cols="30" 
        rows="10"
        placeholder="Description"
        onChange={(e) => handleChange(e)}
        value={formData.about}
      />
    </div>
  );
}
export default Profile