import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import './Upload.css';



function Upload() {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const onSubmit =  async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("video", file);
            formData.append('description', description);
            formData.append('date', date);

            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data.message);

        } catch (e) {
            console.error('Error uploading file:', e);
        }

    }

    return (
        <div className="main-container">
            <Link to="/" className="home-link">
                <button className= "home-button">Home Page</button>
            </Link>
            <div className="upload-form">
                <h2 className="h2" >Upload Page</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="video">Choose Video:</label>
                        <input className="label" type="file" id="video" onChange={handleFileChange}/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="description">Description:</label>
                        <textarea id="description" value={description} onChange={handleDescriptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="date">Date:</label>
                        <textarea id="date" value={date} onChange={handleDateChange}/>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default Upload;
