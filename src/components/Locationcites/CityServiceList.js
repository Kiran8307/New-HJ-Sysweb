// Locationcites/CityDetailPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import cityData from "./citymain.json"; 
import "./citystyle.css";


export default function CityDetailPage() {
  const { cityId } = useParams();
  
  const currentCity = cityData.find(city => city.id === cityId);

  if (!currentCity) {
    return <h2>City not found!</h2>;
  }

  return (
    <div className="city-page-wrapper">
      
      {/* Yeh aapka bada Rounded Box hai (Wireframe wala) */}
      <div className="wireframe-rounded-box">
        <h2 className="box-title">{currentCity.cityName} Service List</h2>
        
        <div className="services-container">
          {/* Yahan services list ho rahi hain */}
          {currentCity.services.map((service, index) => (
            
            <Link 
              key={index} 
              to={`/location/${currentCity.id}/${service.id}`} 
              className="service-row-link"
            >
              <div className="service-row-box">
                {service.name}
              </div>
            </Link>
            
          ))}
        </div>
      </div>

    </div>
  );
}