import React, { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AddressInfo } from "../AdressInfo/AddressInfo";
import "./SearchAddress.css";

interface ISetState {
  setPosition: Function;
}

interface IDataRequest {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}

export const SearchAdress: FC<ISetState> = ({ setPosition }) => {
  const [IP, setIP] = useState<string>("0.0.0.0");
  const [dataRequest, setDataRequest] = useState<IDataRequest>();
  const urlRequest: string = `http://ip-api.com/json/${IP}`;

  const makeRequest = () => {
    axios.get(urlRequest).then((response) => {
      setDataRequest(response.data);
    });
  };

  const setIPState = (value: string) => {
    setIP(value);
  };

  useEffect(() => {
    console.log(dataRequest);
    if (dataRequest !== undefined && dataRequest.status !== "fail") {
      setPosition([dataRequest.lat, dataRequest.lon]);
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
      {dataRequest !== undefined && dataRequest.status !== "fail" ? (
        <AddressInfo
          ipAddress={dataRequest.query}
          location={dataRequest.regionName}
          timezone={dataRequest.timezone}
          isp={dataRequest.isp}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
