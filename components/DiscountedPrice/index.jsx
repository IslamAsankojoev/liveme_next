import React from 'react'
import { useSelector } from 'react-redux'

const DiscountedPrice = ({ price }) => {
  const role = useSelector((state) => state.user.data?.role)

  return (
    <>{role ? `${price * (1 - role?.discount / 100)}cом` : null}</>
  )
}

export default DiscountedPrice