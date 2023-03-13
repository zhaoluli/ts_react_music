import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners
    }
  }, shallowEqual)

  function handlePreClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  let img = banners[currentIndex]?.imageUrl
  if (img) {
    img += '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{
        background: `url(${img}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            afterChange={handleAfterChange}
            autoplay
            ref={bannerRef}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.targetId}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePreClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
