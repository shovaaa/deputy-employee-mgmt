import Button from '../../Button/Button';
import React, { useEffect, useState } from 'react';
import { IInput } from '../../../../interfaces/InputBox';
import InputBox from '../../InputBox/InputBox';
import { IButton } from '../../../../interfaces/Button';

interface IProps {
  detailForm: IInput[];
  saveButton: IButton;
}

const DetailForm = (props: IProps) => {

  const [detailValue, setDetailValue] = useState({
    address: props.detailForm.find((detail) => { if (detail.id === 'address') return detail })?.value,
    email: props.detailForm.find((detail) => { if (detail.id === 'email') return detail })?.value,
    location: props.detailForm.find((detail) => { if (detail.id === 'location') return detail })?.value,
    dateOfBirth: props.detailForm.find((detail) => { if (detail.id === 'dateOfBirth') return detail })?.value,
  });

  const [id, setId] = useState('');

  return (
    <div className="EmployeeProfileModal-detailForm w-100">
      {
        props.detailForm.map((value, index) => {
          const id = value.name;
          return (
            <div className="mb-4" key={index}>
              <InputBox {...value} getId={(value) => setId(value)} onChange={(detail) => {
                setDetailValue({
                  address: id === 'address' ? detail : detailValue.address,
                  email: id === 'email' ? detail : detailValue.email,
                  location: id === 'location' ? detail : detailValue.location,
                  dateOfBirth: id === 'dateOfBirth' ? detail : detailValue.dateOfBirth,
                })
              }} />
            </div>
          )
        })
      }
      <div className="EmployeeProfileModal-detailForm--btn">
        <Button
          variant={props.saveButton.variant}
          size={props.saveButton.size}
          buttonText={props.saveButton.buttonText}
          buttonAlt={props.saveButton.buttonAlt}
          buttonClass={props.saveButton.buttonClass}
        />
      </div>
    </div>
  )
}

export default DetailForm;