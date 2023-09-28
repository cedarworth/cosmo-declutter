import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../styles.css";
import Navbar from "../components/layout/Navbar";
import { useUser } from "../providers/UserProvider";
// import { useHistory } from "react-router-dom";
import { global } from "../hooks/UseGetUser";


function ProfilePage({ user_id }) {
    // const history = useHistory();
    const [userItem, setUserItem] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    location: "",
  });

 console.log(useGetUser)

  const { user } = useUser();

  const UploadItem = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth", userItem)
      .then((response) => {
        console.log(response);
        // history.push("/product", { data: userItem });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setUserItem((prevState) => ({
      ...prevState,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  useEffect(() => {
    fetch(`http://localhost:4000/api/auth/${user_id}`)
      .then((response) => response.json())
      .then((data) => setUserItem(data))
      .catch((error) => console.error("Error:", error));
  }, [user_id]);

  // const userName = useMemo(() => {
  //   if (user) {
  //     return user.user.name;
  //   }
  // }, [user]);

  return (
    <>
      <Navbar />
      <div className="user-profile">
        <h2>{`${""}'s Declutter Corner`}</h2>
        <h3>You can upload an Item for sale here:</h3>
        <form onSubmit={UploadItem}>
          <label>
            Image:
            <input type="file" onChange={handleImageUpload} />
            {userItem.image && <img src={userItem.image} alt="Preview" />}
          </label>
          {/* Other form fields */}
          <label>
          Name:
          <input
            type="text"
            name="name"
            value={userItem.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={userItem.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={userItem.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={userItem.location}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default ProfilePage;