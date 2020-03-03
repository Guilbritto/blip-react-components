import styled from "styled-components";

export const Container = styled.div`
  
  padding: 15px;
  margin: 0px;
  border-radius: 7px;
  height: 196px;
  width: 188px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: box-shadow .15s ease-in-out,transform .15s ease-in-out;
  box-shadow: 0 2px 12px 0 #e1e7ee;

  cursor:pointer;

  &:hover{
    box-shadow: 0 4px 4px #dbe3ef, 0 16px 16px #dee4f0, 0 20px 20px #e4eaf1;
    transform: translateY(-4px);
  }

  img {
    font-size: 3rem;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    margin-bottom:15px;
  }

  div > span {
    font-weight: 700;
    color: #52636c;
    word-wrap: break-word;
    height: 50px;
  }

  div > small {
    color: #738192;
    font-size: .75rem;
    letter-spacing: 0;
  }
}`;

export const ContainerMaster = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 188px);
  gap: 24px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 1100px) {
    max-width: 1120px;
    width: 1120px;
  }
  @media (min-width: 852px) {
    max-width: 830px;
    width: 830px;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
