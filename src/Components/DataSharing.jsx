import React from 'react'
import DataReceiver from './DataReceiver'

function DataSharing() {
  return (
    <div>
        <h1>Data to share receiver</h1>
        <DataReceiver name={"adam"} id={12345}>
<button>Click</button>
<p>hello</p>
        </DataReceiver>
    </div>
  )
}

export default DataSharing