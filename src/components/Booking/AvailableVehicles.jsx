import React, { useEffect, useState } from "react";
import xhrService from "../../services/xhr.service";

function AvailableVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const { data } = await xhrService.get(
          "http://localhost:9000/hirewheels/v1/vehicles"
        );
        setLoading(false);
        setVehicles(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
      return () => {};
    };
    fetchVehicles();
  }, []);

  const bookVehicle = () => {};
  return (
    <>
      {loading ? (
        <div>
          <i className="fa fa-spinner fa-spin" style={{fontsize:"3rem"}}></i>Loading...
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>Available Vehicles</h2>
          <table className="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th>Vehicle Image</th>
                <th>Model</th>
                <th>Number</th>
                <th>Sub Category</th>
                <th>Fuel Type</th>
                <th>Cost Per Hour</th>
              </tr>
            </thead>
            <tbody className="container text-center">
              {vehicles.map((vehicle) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={`${vehicle.vehicleImage}`}
                        height="60px"
                        alt="vehicle_logo"
                      />
                    </td>
                    <td>
                      <div class="container text-center">
                        <div class="row">
                          <h2>{vehicle.vehicleModel}</h2>
                        </div>
                        <div class="row">
                          <label>
                            <strong>Color</strong>
                          </label>
                          <label class="property-value"> {vehicle.color}</label>
                        </div>
                      </div>
                    </td>
                    <td>{vehicle.vehicleNumber}</td>
                    <td>{vehicle.vehicleSubcategory}</td>
                    <td>{vehicle.fuelType}</td>
                    <td>
                      <div>
                        <label> {`RS.${vehicle.pricePerHour}`}</label>
                      </div>
                      <div>
                        <button
                          class="btn btn-primary"
                          onClick={() => bookVehicle(vehicle.vehicleId)}
                        >
                          Book Now
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default AvailableVehicles;
