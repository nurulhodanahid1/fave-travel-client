import React from 'react';
import './about.css';
import about from '../../../images/about/about.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className="p-5">
      <h1  style={{color: "#2563eb"}} className='text-center mb-5 mt-5'>Frequently Asked Questions</h1>
      <div className="row d-flex justify-content-between g-4">
        <div className="col-md-6">
          <img style={{ width: "100%" }} src={about} alt="about us" />
        </div>
        <div className="col-md-6">
          {/* <h2 className='mb-4'>If you have any question</h2> */}
          <div className="accordion mt-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Do you need passport and visa?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  if you are a foreigner, you must need passport, visa and legal documents.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Do you need printed copy?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You don't need any printed copy. After order confirmation you will received a email with invoice. Tour time you just show this copy.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What should I wear?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You should comfortable dress you what you want to wear. But must follow which country you visiting and any restriction any dress you can not were this kind of dress
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;