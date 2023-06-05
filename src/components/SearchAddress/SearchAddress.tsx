import React, { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AddressInfo } from "../AdressInfo/AddressInfo";
import "./SearchAddress.css";

interface ISetState {
  setPosition: Function;
}

// interface IDataRequest {
//   isp: string;
//   lat: number;
//   lon: number;
//   query: string;
//   regionName: string;
//   status: string;
//   timezone: string;
// }

interface IDataRequest {
  ip: string;
  isp: string;
  location: {
    lat: number;
    lng: number;
    timezone: string;
    region: string;
  };
  code: number;
}

export const SearchAdress: FC<ISetState> = ({ setPosition }) => {
  const [IP, setIP] = useState<string>("0.0.0.0");
  const [dataRequest, setDataRequest] = useState<IDataRequest>();
  // const urlRequest: string = `https://ip-api.com/json/${IP}`;
  const urlRequest: string = `https://geo.ipify.org/api/v2/country,city?apiKey=at_TcRlR6D3UC4LNAkpS4yGdO7YIO5G7&ipAddress=${IP}`;

  const setIPState = (value: string) => {
    setIP(value);
  };

  const makeRequest = async () => {
    await axios
      .get<IDataRequest>(urlRequest)
      .then((response) => {
        setDataRequest(response.data);
      })
      .catch(() => {
        alert("Something went wrong! Probably incorrect IP address.");
      });
  };

  useEffect(() => {
    if (dataRequest !== undefined) {
      setPosition([dataRequest.location.lat, dataRequest.location.lng]);
    }
  }, [dataRequest, setPosition]);

  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <div className="search">
        <input
          type="text"
          name="ipInput"
          placeholder="Search for any IP address"
          onChange={(e) => setIPState(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="14"
          onClick={() => makeRequest()}
        >
          <path fill="none" stroke="#FFFFFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </div>
      {dataRequest !== undefined && dataRequest.code !== 422 ? (
        <AddressInfo
          ipAddress={dataRequest.ip}
          location={dataRequest.location.region}
          timezone={dataRequest.location.timezone}
          isp={dataRequest.isp}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
