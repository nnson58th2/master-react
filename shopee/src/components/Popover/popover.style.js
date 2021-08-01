import styled, { keyframes } from 'styled-components'

export const PopoverEnterAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const Drawer = styled.div`
  top: 100%;
  right: 0;
  position: absolute;
  will-change: transform;
  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  opacity: 1;
  z-index: 69;
  border: 1px solid rgba(0, 0, 0, 0.09);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    opacity: 0;
  }
`

export const PopoverArrow = styled.div`
  position: absolute;
  top: -10px;
  right: 8px;

  border-bottom: 10px solid rgb(255, 255, 255);
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;

  width: 0;
  height: 0;
`

export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 /20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
`
