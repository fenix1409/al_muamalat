import React from 'react';

interface InfoIconProps {
  icon: React.ReactNode;
  text: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ icon, text }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#f8f4f4',
          marginBottom: '10px',
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: '14px', color: '#002b5c' }}>{text}</div>
    </div>
  );
};

export default InfoIcon;