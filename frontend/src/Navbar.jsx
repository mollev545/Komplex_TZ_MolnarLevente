import React from 'react'
import { useState } from 'react'
import { Link,Navlink } from 'react'

import'./Navbar.css'

function Navbar() {
    const [menuOPen,setMenuOPen]=useState(false)
return
<nav>
<Link to="/" className="title"> Címoldal</Link>
<div className='menu' onClick={()  =>
{
    setMenuOPen(!menuOPen);
}
}>

<span></span>
<span></span>
<span></span>
</div>

</nav>
}
export default Header;