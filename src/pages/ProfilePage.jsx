import React, { useState } from 'react';

const ProfilePage = () => {
    const [item, setItem] = useState({
        id: '',
        image: null,
        name: '',
        description: '',
        price: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        setItem(prevState => ({
            ...prevState,
            image: URL.createObjectURL(e.target.files[0])
        }));
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <form>
                <label>
                    ID:
                    <input type="text" name="id" value={item.id} onChange={handleChange} />
                </label>
                <label>
                    Image:
                    <input type="file" onChange={handleImageUpload} />
                    {item.image && <img src={item.image} alt="Preview" />}
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={item.name} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={item.description} onChange={handleChange} />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={item.price} onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={item.location} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfilePage;
