const Profile = ({handleChange, handleImage, formData}) =>{
  return(
    <div className="profile-form">
      <h1>Personal Information</h1>
      <div className="input-fields">
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
        <div className="upload-photo">
          <input
            className="hidden"
            type="file"
            name="profilePicture"
            placeholder="ads"
            onChange={(e) => handleImage(e)}
          />
          <label className="upload-photo-label" htmlFor="files">Upload a Photo</label>
          </div>
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
          placeholder="LinkedIn Profile"
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
          rows="5"
          placeholder="Write a short summary about yourself."
          onChange={(e) => handleChange(e)}
          value={formData.about}
        />
      </div>
    </div>
  );
}
export default Profile