import React from 'react'
import Routes from 'routes'
import { useCheckUserAccessRights } from 'hooks/checkUserAccessRights.hook'

function App() {
  useCheckUserAccessRights()

  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
