import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const OfficeAddressCard = ({ company, address, phone, email }) => {
  return (
    <div className="max-w-auto w-full  p-6">
      <h3 className="text-2xl font-bold text-blue-800 mb-4">{company}</h3>

      <div className="space-y-4 text-gray-700 text-md">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-black mt-1 text-xl" />
          <p>{address}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-black text-xl" />
          <p>{phone}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-black text-xl" />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeAddressCard;
