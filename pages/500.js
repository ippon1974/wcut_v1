import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import classes from '../styles/error.module.scss';
import { useMediaQuery } from 'react-responsive';

export default function Custom500() {
  const [mobile, setMobile] = useState(false)
  const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
  useEffect(() => setMobile(isPhone), [isPhone]);
    
  return (
    <>
       {mobile ?  
         <div className={classes.container500Mobile}>
                <div>
                    <h1><Link href={'/'} title={'На главную'}>500</Link></h1>
                </div>
        </div> :  
        <div className={classes.container500}>
                <div>
                    <h1><Link href={'/'} title={'На главную'}>500</Link></h1>
                </div>
        </div>} 
    </>
    )
  }