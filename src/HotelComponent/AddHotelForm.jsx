import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHotelForm = () => {
  const [locations, setLocations] = useState([]);
  const [hotelUsers, setHotelUsers] = useState([]);

  let navigate = useNavigate();

  const retrieveAllLocations = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/location/fetch"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveAllLocations();
      if (allLocations) {
        setLocations(allLocations.locations);
      }
    };

    getAllLocations();
  }, []);

  const retrieveAllHotelUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/user/hotel");
    return response.data;
  };

  useEffect(() => {
    const getAllHotelUsers = async () => {
      const allHotelUsers = await retrieveAllHotelUsers();
      if (allHotelUsers) {
        setHotelUsers(allHotelUsers.users);
      }
    };

    getAllHotelUsers();
  }, []);

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [hotel, setHotel] = useState({
    name: "",
    description: "",
    locationId: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    userId: "",
  });

  const handleInput = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const saveHotel = () => {
    const formData = new FormData();
    formData.append("image1", selectedImage1);
    formData.append("image2", selectedImage2);
    formData.append("image3", selectedImage3);
    formData.append("image4", selectedImage4);
    formData.append("name", hotel.name);
    formData.append("locationId", hotel.locationId);
    formData.append("description", hotel.description);
    formData.append("street", hotel.street);
    formData.append("pincode", hotel.pincode);
    formData.append("emailId", hotel.emailId);
    formData.append("pricePerDay", hotel.pricePerDay);
    formData.append("totalRoom", hotel.totalRoom);
    formData.append("userId", hotel.userId);

    axios
      .post("http://localhost:8080/api/hotel/add", formData)
      .then((result) => {
        result.json().then((res) => {
          console.log(res);

          console.log(res.responseMessage);

          navigate("/home");
        });
      });
  };

  return (
    <div className="register-main">
      <div className="register bg-image">
        <div className="register-container glass">
          <div className="register-center">
            <h2>Add Hotel</h2>
            <form onSubmit={saveHotel}>
              <div className="register-input-div flex-inputs">
                <div className="column">
                  <input
                    type="text"
                    placeholder="Hotel Name"
                    style={{ width: "100%" }}
                    id="name"
                    name="name"
                    onChange={handleInput}
                    value={hotel.name}/>
                </div>
                <div className="column">
                  <select
                    onChange={handleInput}
                    name="locationId">
                    <option value="">Select Location</option>
                    {locations.map((location) => {
                    return (
                      <option value={location.id}> {location.city} </option>
                    );
                  })}
                  </select>
                </div>
              </div>
              {/* <div className="col-md-6 mb-3">
                <label className="form-label">
                  <b className="fs-5">Location</b>
                </label>

                <select
                  name="locationId"
                  onChange={handleInput}
                  className="form-control"
                >
                  <option value="">Select Location</option>

                  {locations.map((location) => {
                    return (
                      <option value={location.id}> {location.city} </option>
                    );
                  })}
                </select>
              </div>
              </div> */}

              <div className="register-input-div flex-inputs">
                <div className="column">
                  <input
                    type="email"
                    placeholder="Hotel Email"
                    style={{ width: "100%" }}
                    id="emailId"
                    name="emailId"
                    onChange={handleInput}
                    value={hotel.emailId}/>
                </div>
                <div className="column">
                  <select
                    onChange={handleInput}
                    name="userId">
                    <option value="">Select Hotel Manager</option>
                    {hotelUsers.map((hotelUser) => {
                    return (
                      <option value={hotelUser.id}>
                        {" "}
                        {hotelUser.firstName + " " + hotelUser.lastName}{" "}
                      </option>
                    );
                  })}
                  </select>
                </div>
              </div>
              <div className="register-input-div flex-inputs">
              <div className="column">
                <textarea
                  placeholder="Hotel description"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleInput}
                  value={hotel.description}
                />
                </div>
              </div>
              <div className="register-input-div flex-inputs">
                <div className="column">
                  <input
                    type="number"
                    placeholder="Price Per Day"
                    style={{ width: "100%" }}
                    id="pricePerDay"
                    name="pricePerDay"
                    onChange={handleInput}
                    value={hotel.pricePerDay}/>
                </div>
                <div className="column">
                <input
                    type="number"
                    placeholder="Total Rooms"
                    style={{ width: "100%" }}
                    id="totalRoom"
                    name="totalRoom"
                    onChange={handleInput}
                    value={hotel.totalRoom}/>
                </div>
              </div>
              <div className="register-input-div flex-inputs">
                <div className="column">
                  <input
                    type="text"
                    placeholder="Street"
                    style={{ width: "100%" }}
                    id="street"
                    name="street"
                    onChange={handleInput}
                    value={hotel.street}/>
                </div>
                <div className="column">
                <input
                    type="number"
                    placeholder="Pin Code"
                    style={{ width: "100%" }}
                    id="pincode"
                    name="pincode"
                    onChange={handleInput}
                    value={hotel.pincode}/>
                </div>
              </div>
              <div className="register-input-div flex-inputs">
                <div className="column">
                <label htmlFor="image1" className="form-label">
                  <b className="fs-5"> Select Hotel Image-1</b>
                </label>
                  <input
                    type="file"
                    placeholder="Hotel Image 1"
                    id="image1"
                    name="image1"
                    value={hotel.image1}
                    onChange={(e) => setSelectedImage1(e.target.files[0])}
                  />
                </div>
                <div className="column">
                <label htmlFor="image2" className="form-label">
                  <b className="fs-5"> Select Hotel Image-2</b>
                </label>
                  <input
                    type="file"
                    placeholder="Hotel Image 2"
                    id="image2"
                    name="image2"
                    value={hotel.image2}
                    onChange={(e) => setSelectedImage2(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="register-input-div flex-inputs">
                <div className="column">
                <label htmlFor="image3" className="form-label">
                  <b className="fs-5"> Select Hotel Image-3</b>
                </label>
                  <input
                    type="file"
                    id="image3"
                    name="image3"
                    value={hotel.image3}
                    onChange={(e) => setSelectedImage3(e.target.files[0])}
                  />
                </div>
                <div className="column">
                <label htmlFor="image4" className="form-label">
                  <b className="fs-5"> Select Hotel Image-4</b>
                </label>
                  <input
                    type="file"
                    id="image4"
                    name="image4"
                    value={hotel.image4}
                    onChange={(e) => setSelectedImage4(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="register-center-buttons">
                <button type="submit" value="Register Hotel">
                  Add Hotel
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddHotelForm;
