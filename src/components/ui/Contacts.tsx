import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import InfoIcon from './InfoIcon';

const Contacts: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "16px" }} className='px-[100px]'>
            <div className="w-[426px] text-[#103741] text-[14px] font-semibold">
                <InfoIcon
                    icon={<FaMapMarkerAlt size={24} color="#fe5d37" />}
                    text="Tashkent city, Mirzo Ulugbek district, Lashkarbegi MFY, 59 Independence"
                />
            </div>
            <div className="w-[426px] text-[#103741] text-[14px] font-semibold">
                <InfoIcon
                    icon={<FaEnvelope size={24} color="#fe5d37" />}
                    text="info@al-muamalat.uz"
                />
            </div>
            <div className="w-[426px] text-[#103741] text-[14px] font-semibold">
                <InfoIcon
                    icon={<FaPhone size={24} color="#fe5d37" />}
                    text="+998 99 051 18 81"
                />
            </div>
        </div>
    )
}

export default Contacts