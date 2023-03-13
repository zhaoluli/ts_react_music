import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Singer: FC<Iprops> = () => {
  return <div>Singer</div>
}

export default memo(Singer)
