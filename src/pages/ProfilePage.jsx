import React, { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles.css';

const ProfilePage = () => {
    const [user, setUser] = useState({
        id: '',
        image: '',
        name: '',
        description: '',
        price: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        setUser(prevState => ({
            ...prevState,
            image: URL.createObjectURL(e.target.files[0])
        }));
    };

    useEffect(() => {
      const fetchUser = async () => {
          try {
              const res = await axios.get('/api/profile');
              setUser(res.data);
          } catch (err) {
              console.log(err);
          }
      };

      fetchUser();
  }, []);

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <form>
                <label>
                    ID:
                    <input type="text" name="id" value={user.id} onChange={handleChange} />
                </label>
                <label>
                    Image:
                    <input type="file" onChange={handleImageUpload} />
                    {user.image && <img src={user.image} alt="Preview" />}
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={user.description} onChange={handleChange} />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={user.price} onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={user.location} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfilePage;
