import React from 'react'
import StickyHeader from './StickyHeader'

const Header = () => {
  return (
    <>
    <div className="bg-zinc-100 text-center py-3">
      <span className="font-semibold"> Learn about Guest Favourites, the most loved homes on Airbnb</span>
    </div>
    <StickyHeader />
    </>
  )
}

export default Header
