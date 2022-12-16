import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import TestComponent from '../../components/TestComponent'
import { useMediaQuery } from 'react-responsive'

export default function Test() {

  const [color, setColor] = useState(false)
  const [colortwo, setColorTwo] = useState(false)

  const isPhone = useMediaQuery({ query: '(max-width: 321px)'})
  const isLaptop = useMediaQuery({ query: '((max-width: 811px) and (min-width: 321px))'})

  useEffect(() => setColor(isPhone), [isPhone]);
  useEffect(() => setColorTwo(isLaptop), [isLaptop]);

    return(
        <div>
          <h1>VOVAN HOW ARE YOU</h1>
          {color && <div>You are iphone</div>}
          {colortwo && <div>You are laptop</div>}
        </div>
    )
}