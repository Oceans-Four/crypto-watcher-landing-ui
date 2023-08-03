import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import coin1 from './../../assets/images/coins/coin1.png';
import coin3 from './../../assets/images/coins/coin3.png';
import coin4 from './../../assets/images/coins/coin4.png';

// type FillOutFormProps = {
//   selectText: string[],
//   setSelectText: React.Dispatch<React.SetStateAction<string[]>>
// }


const FillOutForm = () => {
  const nav = useNavigate();
  const [selectText, setSelectText] = useState([coin4, 'Bitcoin']);
  const formDetails = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nav("/contact-us");
  }

  return (
    <div className="container">
      <div className="form-wrapper-box style-1 text-center">
        <div className="section-head " >
          <h4 className="title m-t0">How to Purchase from us ?</h4>
          <p>Fill out the below form and we will contact you via email & details</p>
        </div>
        <form className="dz-form" onSubmit={(e) => formDetails(e)}>
          <div className="form-wrapper">
            <div className="flex-1">
              <div className="row g-3">
                <div className="col-xl-3 col-md-6 " >
                  <input name="dzName" type="text" required placeholder="Wallet Address" className="form-control" />
                </div>
                <div className="col-xl-3 col-md-6 " >
                  <Dropdown className="select-drop">
                    <Dropdown.Toggle as="div" className="i-false select-drop-toggle">
                      <img src={selectText[0]} alt="" /> {selectText[1]} <i className="fa-sharp fa-solid fa-angle-down" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setSelectText([coin4, "Bitcoin"])}><img src={coin4} alt="" /> Bitcoin</Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectText([coin3, "Ethereum"])}><img src={coin3} alt="" /> Ethereum</Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectText([coin1, "Tether"])}><img src={coin1} alt="" /> Tether</Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>
                </div>
                <div className="col-xl-3 col-md-6 " >
                  <input name="dzName" type="text" required placeholder="How much worth in $?" className="form-control" />
                </div>
                <div className="col-xl-3 col-md-6 ">
                  <input name="dzName" type="text" required placeholder="Email Address" className="form-control" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-lg btn-gradient btn-primary btn-shadow">Get Started</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FillOutForm