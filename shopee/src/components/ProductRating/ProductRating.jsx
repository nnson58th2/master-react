import React from 'react'
import PropTypes from 'prop-types'

import * as S from './productRating.style'

export default function ProductRating({ rating }) {
  const handleWidth = index => {
    const indexRating = index + 1

    if (indexRating <= rating) {
      return '100%'
    }

    if (0 < indexRating - rating && indexRating - rating < 1) {
      return `${(1 - (indexRating - rating)) * 100}%`
    }

    return '0%'
  }

  return (
    <S.RatingStarStars>
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <S.RatingStarWrapper key={index}>
            <S.RatingStarPercent style={{ width: handleWidth(index) }}>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x={0}
                y={0}
                className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
              </svg>
            </S.RatingStarPercent>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid"
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </svg>
          </S.RatingStarWrapper>
        ))}
    </S.RatingStarStars>
  )
}

ProductRating.propTypes = {
  rating: PropTypes.number
}