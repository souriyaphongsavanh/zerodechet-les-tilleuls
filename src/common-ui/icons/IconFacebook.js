import React from 'react'

const IconFacebook = (props) => {
  // FIXME how to make it generic?
  const width = props.width || 20
  const height = props.height || 20

  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 32 32">
      <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
    </svg>
  )
}

export default IconFacebook;