import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners
    }
  }, shallowEqual)

  return (
    <div>
      {banners.map((item) => {
        return <div key={item.targetId}> {item.imageUrl} </div>
      })}
    </div>
  )
}

export default memo(TopBanner)
