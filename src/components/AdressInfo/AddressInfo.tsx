import React, { FC } from "react";
import "./AddressInfo.css";

interface IAddressInfoProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

export const AddressInfo: FC<IAddressInfoProps> = ({
  ipAddress,
  location,
  timezone,
  isp,
}) => {
  return (
    <div className="address-info">
      <ul className="address-info_items">
        <li className="address-info_item">
          <h3>IP address</h3>
          {ipAddress}
        </li>
        <li className="address-info_item">
          <h3>Location</h3>
          {location}
        </li>
        <li className="address-info_item">
          <h3>Timezone</h3>
          {timezone}
        </li>
        <li className="address-info_item">
          <h3>ISP</h3>
          {isp}
        </li>
      </ul>
    </div>
  );
};
