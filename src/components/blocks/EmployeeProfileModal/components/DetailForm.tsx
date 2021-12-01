import Button from '../../Button/Button';
import React, { useState } from 'react';
import InputBox from '../../InputBox/InputBox';

interface IProps {
  location?: string;
  dateOfBirth?: string;
  address: string;
  email: string;
  employeeId: string;
}

const DetailForm = (props: IProps) => {

  const [detailValue, setDetailValue] = useState({
    address: props.address,
    email: props.email,
    location: props.location,
    dateOfBirth: props.dateOfBirth,
    employeeId: props.employeeId
  });

  const [id, setId] = useState('');

  const callSaveForlgetail = () => {
    const event = new CustomEvent('deputy-detail-save', { detail: detailValue });
    document.dispatchEvent(event);
  };

  return (
    <div className="EmployeeProfileModal-detailForm w-100">
      <div className="mb-4">
        <InputBox
          displayHeight="lg"
          displayWidth="w-lg-75 w-100"
          label="Address"
          name="address"
          id="address"
          type="text"
          placeholder="Address"
          value={detailValue.address ? detailValue.address : props.address}
          getId={(value) => setId(value)}
          onChange={(detail) => {
            setDetailValue({
              address: detail,
              email: detailValue.email,
              location: detailValue.location,
              dateOfBirth: detailValue.dateOfBirth,
              employeeId: detailValue.employeeId
            })
          }}
        />
      </div>
      <div className="mb-4">
        <InputBox
          displayHeight="lg"
          displayWidth="w-lg-75 w-100"
          label="Email"
          name="email"
          id="email"
          type="text"
          placeholder="Email"
          value={detailValue.email ? detailValue.email : props.email}
          getId={(value) => setId(value)}
          onChange={(detail) => {
            setDetailValue({
              address: detailValue.address,
              email: detail,
              location: detailValue.location,
              dateOfBirth: detailValue.dateOfBirth,
              employeeId: detailValue.employeeId
            })
          }}
        />
      </div>
      <div className="mb-4">
        <InputBox
          displayHeight="lg"
          displayWidth="w-lg-75 w-100"
          label="Location"
          name="location"
          id="location"
          type="text"
          placeholder="Location"
          getId={(value) => setId(value)}
          value={detailValue.location ? detailValue.location : props.location}
          onChange={(detail) => {
            setDetailValue({
              address: detailValue.address,
              email: detailValue.email,
              location: detail,
              dateOfBirth: detailValue.dateOfBirth,
              employeeId: detailValue.employeeId
            })
          }}
        />
      </div>
      <div className="mb-4">
        <InputBox
          displayHeight="lg"
          displayWidth="w-lg-75 w-100"
          label="Date Of Birth"
          name="dateOfBirth"
          id="dateOfBirth"
          type="text"
          placeholder="Date Of Birth"
          getId={(value) => setId(value)}
          value={detailValue.dateOfBirth ? detailValue.dateOfBirth : props.dateOfBirth}
          onChange={(detail) => {
            setDetailValue({
              address: detailValue.address,
              email: detailValue.email,
              location: detailValue.location,
              dateOfBirth: detail,
              employeeId: detailValue.employeeId
            })
          }}
        />
      </div>
      <div
        className="EmployeeProfileModal-detailForm--btn"
        onClick={() => callSaveForlgetail()}>
        <Button
          variant="blue"
          size="sm"
          buttonText="Save"
          buttonAlt="save-btn"
          buttonClass=""
        />
      </div>
    </div>
  )
}

export default DetailForm;