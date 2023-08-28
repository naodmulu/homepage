import React from 'react'
import { Box } from '@mui/material'

const GeneratedText = (props) => {
  return (
    <Box className=' Gtab'>
        <div className='px-5 py-3'>
        <h2 className=" icongen ">Generated Result</h2>
        </div>
        <div className='px-5 py-3'>
        <textarea className="form-control w-full" id="exampleFormControlTextarea1" rows="4" value={props.text} readOnly></textarea>
        </div>   
    </Box>
  )
}

export default GeneratedText