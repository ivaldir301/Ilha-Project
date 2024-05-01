import { HTMLAttributes } from "react";
import styled from "styled-components";

export const FaqWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 50px;
`;

export const FaqTitle = styled.h1`
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 40px;
  letter-spacing: 3px;
`;

export const Faq = styled.div``;

export const Accordian = styled.button`
  background-color: white;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  padding: 2rem 2rem;
  border: none;
  outline: none;
  transition: 0.4s;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  &:hover {
    background-color: #f1f7f5;
  }
`;

export const Panel = styled.div<{ display: string }>`
  padding: 0 18px;
  background-color: white;
  display: ${(props) => props.display};
  overflow: hidden;
  background-color: #f1f7f5;
  padding: 0 2rem 0rem 2rem;
`;

export const Paragraph = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.2em;
`;
