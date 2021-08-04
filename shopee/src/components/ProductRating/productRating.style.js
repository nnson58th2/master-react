import styled from 'styled-components'

export const RatingStarStars = styled.div`
  display: flex;
`

export const RatingStarWrapper = styled.div`
  position: relative;
  margin-right: 1px;

  svg {
    position: relative;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  > svg {
    color: #d5d5d5;
    display: block;
  }
`

export const RatingStarPercent = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  overflow: hidden;
  z-index: 1;

  svg {
    display: block;
    position: absolute;
    left: 0;
    color: #ffce3d;
    fill: #ffce3d;
  }
`
