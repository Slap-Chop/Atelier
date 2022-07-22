import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const FullImageContainer = styled.div`
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

const ImageModal = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction:column;
  padding: 25px;
  position: relative;

`
const CloseButton = styled.button`
  top: 0;
  right: 0;
`

export default function FullImageModal ({img, setShowFullImg}) {

  return(
    <>
      <FullImageContainer>
        <ImageModal>
          <img src={img}/>
          <CloseButton onClick={() => setShowFullImg(false)}>
            X
          </CloseButton>
        </ImageModal>
      </FullImageContainer>
    </>
  )

}