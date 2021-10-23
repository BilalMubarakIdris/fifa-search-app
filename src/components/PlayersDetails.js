import React from "react";
import { useParams } from "react-router-dom";
import playersData from "../playersData";

function PlayersDetails(props) {
  const { serviceId } = useParams();
  const myplayersData = playersData.find((service) => service.id === serviceId);

  return (
      <div className="details-wrapped">
             <h1>{myplayersData.name}</h1>
        <div className="player-details-container">
            <div className="grapt-image">
                <h3>Pix goes here</h3>
            </div>
            <div className="details-container">
                <div className="player-details">
                    <button> Overall:{myplayersData.overall}</button>
                    <button>Potential:{myplayersData.finishing}</button>
                </div>
                <div className="details">
                    <p>Age:<span>{myplayersData.age}</span></p>
                    <p>Nationality:<span>{myplayersData.nationality}</span></p>
                    <p>Club:<span>{myplayersData.club}</span></p>
                    <p>Value:<span>{myplayersData.value}</span></p>
                    <p>Wage:<span>{myplayersData.wage}</span></p>
                    <p>Preferred:<span>{myplayersData.preferred}</span></p>
                    <p>Work Rate:<span>{myplayersData.work_rate}</span></p>
                    <p>Position:<span>{myplayersData.position}</span></p>
                    <p>Jersey Number:<span>{myplayersData.jersey_number}</span></p>
                    <p>Joined Date:<span>{myplayersData.joined}</span></p>
                    <p>Contract Valid Until:<span>{myplayersData.contract_valid_until}</span></p>
                    <p>Height:<span>{myplayersData.height}</span></p>
                    <p>Weight:<span>{myplayersData.weight}</span></p>
                    <p>Crossing:<span>{myplayersData.crossing}</span></p>
                    <p>Finishing:<span>{myplayersData.finishing}</span></p>
                    <p>Heading Accuracy:<span>{myplayersData.heading_accuracy}</span></p>
                    <p>Short Passing:<span>{myplayersData.short_passing}</span></p>
                    <p>Vollays:<span>{myplayersData.vollays}</span></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PlayersDetails;
