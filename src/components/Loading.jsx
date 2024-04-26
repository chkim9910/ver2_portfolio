import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrap = styled.div`
  height: 100svh;
  width: 100%;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 1s ease-out forwards 7s; // fade-out 애니메이션 적용

  .title {
    font-size: 65px;
    font-weight: bold;
    position: absolute;
    letter-spacing: 2px;
  }
  .title:first-child {
    color: transparent;
    -webkit-text-stroke: 1px var(--primary);
  }
  .title::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    overflow: hidden;
    white-space: nowrap;
    color: var(--primary);
    animation: loading 6.5s linear infinite;
    animation-delay: 1s;
  }
  @keyframes loading {
    0% {
      right: 100%;
    }
    100% {
      right: 0;
    }
  }
`;

export default function Loading() {
  return (
    <>
      <Wrap>
        <p className="title" data-text="2024 PORTFOLIO.">
          2024 PORTFOLIO.
        </p>
      </Wrap>
    </>
  );
}
