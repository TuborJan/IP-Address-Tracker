import axios from "axios";
import { useEffect, useState } from "react";

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

export const SearchAdress = ({ setPosition }: ISetState) => {
  const [IP, setIP] = useState<string>("0.0.0.0");
  const [dataRequest, setDataRequest] = useState<IDataRequest>();
  const urlRequest: string = `http://ip-api.com/json/${IP}`;

  const makeRequest = () => {
    const response = axios.get(urlRequest).then((response) => {
      setDataRequest(response.data);
    });
  };

  const setIPState = (value: string) => {
    setIP(value);
  };

  useEffect(() => {
    if (dataRequest !== undefined) {
      setPosition([dataRequest.lat, dataRequest.lon]);
      console.log(dataRequest.lat);
    }
  }, [dataRequest]);

  return (
    <div>
      <input
        type="text"
        name="ipInput"
        onChange={(e) => setIPState(e.target.value)}
      />
      <h1 onClick={() => makeRequest()}>header</h1>
    </div>
  );
};
