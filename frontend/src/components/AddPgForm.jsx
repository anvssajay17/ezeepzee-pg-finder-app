import React, { useState } from 'react';
import './styles/AddPgForm.css';
import { useNavigate } from 'react-router-dom';

const AddPgForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    name: '',
    phone: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('city', formData.city);
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:8000/addpg/', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ ' + result.message);
        setMessageType('success');
        setFormData({
          city: '',
          name: '',
          phone: '',
          image: null,
        });
        setTimeout(() => {
          setMessage('');
          navigate('/');
        }, 3000);
      } else {
        setMessage(`❌ PGs in ${formData.city} not supported.`);
        setMessageType('error');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('❌ Server error. Please try again.');
      setMessageType('error');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <>
      {message && (
        <div className={`floating-message ${messageType}`}>
          {message}
        </div>
      )}
      <div className="container-addpg">
        <h2 className='pgheading'>Add PG Details</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="text" name="name" placeholder="PG Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
          <button type="submit">Add PG</button>
        </form>
      </div>
    </>
  );
};

export default AddPgForm;

