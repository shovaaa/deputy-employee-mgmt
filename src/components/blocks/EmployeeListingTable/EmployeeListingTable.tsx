import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import { IButton } from "../../../interfaces/Button";
import { IImageHolder } from "../../../interfaces/ImageHolder";
import Button from "../Button/Button";
import EmployeeProfileModal from "../EmployeeProfileModal/EmployeeProfileModal";
import axios from "axios";
import SearchBox, { IProps as ISearchBox } from "../../blocks/SearchBox/SearchBox";
import Filter, { IProps as IFilter } from "../../blocks/Filter/Filter";

interface IProps {
  employeeDetails: IEmployeeListing[];
  searchBox: ISearchBox;
  filterButton: IFilter;
  saveDetailFormApi: string;
};

export interface IEmployeeListing {
  employeeId: string;
  gender: string;
  name: string;
  location: string;
  email: string;
  status: string;
  address: string;
  dateOfBirth: string;
  viewMoreButton: IButton;
  profilePicture: IImageHolder;
};

const EmployeeListingTable = (props: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [employeeDetails, setEmployeeDetails] = useState<IEmployeeListing[]>(props.employeeDetails);
  const [updatedDetail, setUpdatedDetail] = useState({
    address: '',
    email: '',
    location: '',
    dateOfBirth: '',
    employeeId: ''
  });

  const [profileDetail, setProfileDetail] = useState({
    name: '',
    status: '',
    address: '',
    email: '',
    location: '',
    dateOfBirth: '',
    profilePicture: {
      url: '',
      alt: '',
      displaySize: '',
      displayShape: ''
    },
    employeeId: ''
  });

  const [searchValue, setSearchValue] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('');

  const searchEmployee = (value: string) => {
    if (value.length < 3) return

    axios.get(`${props.searchBox.callApi}?term=${value}`)
      .then(res => {
        const data = res.data.payload;
        setEmployeeDetails(data.employeeDetails);
      })
  };

  const filterEmployee = (value: string) => {
    if (!value) return;

    axios.get(`${props.filterButton.filterApi}?term=${value}`)
      .then(res => {
        const data = res.data.payload;
        setEmployeeDetails(data.employeeDetails);
      })
  };

  useEffect(() => {
    if (searchValue === '') {
      // eslint-disable-next-line
      setEmployeeDetails(props.employeeDetails);
      return;
    };

    // eslint-disable-next-line
    searchValue && searchEmployee(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (filterTerm === '' || filterTerm === 'none') {
      // eslint-disable-next-line
      setEmployeeDetails(props.employeeDetails);
      return;
    };

    // eslint-disable-next-line
    filterTerm && filterEmployee(filterTerm);
  }, [filterTerm]);

  const onSaveDetailForm = (event: any) => {
    const payload = event.detail;

    setUpdatedDetail(payload);

    axios.post(`${props.saveDetailFormApi}`, payload)
      .then(res => {
        const data = res.data.payload;

        setEmployeeDetails(data.employeeDetails);

        setShowModal(false);

      })
  };

  useEffect(() => {
    setProfileDetail({
      ...profileDetail,
      address: updatedDetail.address,
      email: updatedDetail.email,
      location: updatedDetail.location,
      dateOfBirth: updatedDetail.dateOfBirth
    });

  }, [updatedDetail]);

  useEffect(() => {
    document.addEventListener('deputy-detail-save', onSaveDetailForm);

    return () => {
      document.removeEventListener('deputy-detail-save', onSaveDetailForm);
    };
  });

  useEffect(() => {
    setEmployeeDetails(props.employeeDetails);
  }, [props.employeeDetails]);

  console.log(filterTerm);

  return (
    <div className="EmployeeListingTable mb-4">
      <div className="d-block d-lg-flex justify-content-between align-items-center">
        <SearchBox
          {...props.searchBox}
          setSearchValue={(v) => setSearchValue(v)}
        />
        <Filter
          {...props.filterButton}
          buttonText={filterTerm ? filterTerm : props.filterButton.buttonText}
          setFilterTerm={(v) => setFilterTerm(v)}
        />
      </div>
      <div className="container EmployeeListingTable-container d-none d-lg-block">
        <div className="row mb-3">
          <div className="col-lg EmployeeListingTable-title">
            Name
          </div>
          <div className="col-lg EmployeeListingTable-title">
            Address
          </div>
          <div className="col-lg EmployeeListingTable-title col-lg-3">
            Email
          </div>
          <div className="col-lg EmployeeListingTable-title">
            Status
          </div>
          <div className="col-lg EmployeeListingTable-title">

          </div>
        </div>
        {
          employeeDetails.map((employee, index) => {
            return (
              <div className="row mb-3 d-flex align-items-center" key={index}>
                <div className="col-lg">
                  {employee.name}
                </div>
                <div className="col-lg">
                  {employee.address}
                </div>
                <div className="col-lg-3">
                  {employee.email}
                </div>
                <div className="col-lg">
                  {employee.status}
                </div>
                <div className="col-lg text-right" onClick={() => {
                  const detail = {
                    name: employee.name,
                    status: employee.status,
                    address: employee.address,
                    email: employee.email,
                    location: employee.location,
                    dateOfBirth: employee.dateOfBirth,
                    profilePicture: employee.profilePicture,
                    employeeId: employee.employeeId
                  };

                  setProfileDetail(detail);
                  setShowModal(true);
                }}>
                  <Button
                    variant={employee.viewMoreButton.variant}
                    size={employee.viewMoreButton.size}
                    buttonAlt={employee.viewMoreButton.buttonAlt}
                    buttonText={employee.viewMoreButton.buttonText}
                    buttonClass={employee.viewMoreButton.buttonClass}
                  />
                </div>
              </div>
            )
          })
        }
      </div>

      {employeeDetails.map((employee, index) => {
        return (
          <div className="d-block d-lg-none container EmployeeListingTable-container" key={index}>
            <div className="row mb-3">
              <div className="col-4 EmployeeListingTable-title">
                Name
              </div>
              <div className="col-8">
                {employee.name}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4 EmployeeListingTable-title">
                Address
              </div>
              <div className="col-8">
                {employee.address}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4 EmployeeListingTable-title">
                Email
              </div>
              <div className="col-8">
                {employee.email}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4 EmployeeListingTable-title">
                Status
              </div>
              <div className="col-8">
                {employee.status}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4 EmployeeListingTable-title">

              </div>
              <div className="col-8 text-right" onClick={() => {
                const detail = {
                  name: employee.name,
                  status: employee.status,
                  address: employee.address,
                  email: employee.email,
                  location: employee.location,
                  dateOfBirth: employee.dateOfBirth,
                  profilePicture: employee.profilePicture,
                  employeeId: employee.employeeId
                };

                setProfileDetail(detail);
                setShowModal(true);
              }}>
                <Button
                  variant={employee.viewMoreButton.variant}
                  size={employee.viewMoreButton.size}
                  buttonAlt={employee.viewMoreButton.buttonAlt}
                  buttonText={employee.viewMoreButton.buttonText}
                  buttonClass={employee.viewMoreButton.buttonClass}
                />
              </div>
            </div>
          </div>
        )
      })}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="EmployeeListingTable-modal"
        centered
      >
        <Modal.Header closeButton>
          <h2 className="EmployeeProfileModal-heading--title">Employee</h2>
        </Modal.Header>
        <Modal.Body>
          <EmployeeProfileModal {...profileDetail} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeeListingTable;