import React from 'react';
import { IInput } from '../../../../interfaces/InputBox';
import InputBox from '../../InputBox/InputBox';

interface IProps {
  detailForm: IInput[];

  setDetailValue: (v: any) => void;
}

const DetailForm = (props: IProps) => {
  return (
    <div className="EmployeeProfileModal-detailForm w-100">
      {
        props.detailForm.map((value, index) => {
          return (
            <div className="mb-4" key={index}>
              <InputBox {...value} onChange={(v) => props.setDetailValue} />
            </div>
          )
        })
      }
    </div>
  )
}

export default DetailForm;