import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// const ModalContainer = styled.div`
//   display: flex;
//   z-index: 1;
//   width: 0;
//   width: 500px;
//   height: 500px;
//   background: white;
//   alight-items: center;
//   justify-content: center;
//   transition: 1.1s ease-out;
//   position: relative;
//     animation: animate 0.3s;
// `

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Modal = styled.div`
  width: 650px;
  height: 650px;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction:column;
  padding: 25px;
  position: relative;

`

const Header = styled.div`
  text-align: center;
`

export default function NewReviewModal({setShowModal, productName}) {

  const [reviewBody, setReviewBody] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');


  return (
    <ModalContainer>
      <Modal>
        <form>
          <Header>
            <label>Write Your Review</label>
            <p>About the {productName}</p>
          </Header>
          <div>
            <fieldset>
            <div>
                <h4><label>Do you recommend this product</label></h4>
                <input type="radio" id="yes" value="Yes"></input>
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" value="No"></input>
                <label htmlFor="no">No</label>
              </div>
            </fieldset>
          </div>
          <div>
            <h4><label>Add a headline</label></h4>
            <input type="text" placeholder="Example: Best purchase ever!" size="60" maxLength="60" onChange={(e) => setReviewSummary(e.target.value)}/>
            <h4><label>Add a written review</label></h4>
            <textarea placeholder="Why did you like the product or not?" maxLength="1000" onChange={(e) => setReviewBody(e.target.value)}/>
            <div>
              Minimum characters left: {50 - reviewBody.length}
            </div>
            <h4><label>What is your nickname</label></h4>
            <input type="text" placeholder="Example: jackson11!" size="60" maxLength="60" onChange={(e) => setReviewSummary(e.target.value)}/>

            <input type="file" name="image"  className="form-input"></input>

            <h4><label>Your email</label></h4>
            <input type="text" placeholder="Example: jackson11@email.com" size="60" maxLength="60" onChange={(e) => setReviewSummary(e.target.value)}/>
          </div>
          <div>
            <button onClick={() => setShowModal(false)}>Close</button>
            <button onClick={() => setShowModal(false)}>Submit</button>
          </div>
        </form>

      </Modal>
    </ModalContainer>
  )
}