import React from 'react'
import "./Front.css"
import ku from "../../assets/kuvempu.jpg"
import log from "../../assets/klogo.jpg"

const Front = () => {
  return (
    <div className='body'>
      <img src={ku} alt=""/>
      <div className='logo'>
        <img src={log} alt=" "/>
      </div>
      <h1>KUVEMPU UNIVERSITY</h1>
      <h2>Kuvempu University is a public state university in Shankaraghattta, Bhadravathi taluk, Shivamogga, Karnataka, India. It was established in 1987 by the act of the Karnataka state legislature through amendment No. 28/1976 dated 29 January 1989 under the Karnataka State University Act 1976.[2] The university offers undergraduate and graduate degree programs in wide range of disciplines. It was recognized by the UGC in 1994 and is a member of the Association of Indian Universities.
      The university has its headquarters at Jnana Sahyadri Campus, Shivamogga. Its campus is called Jnana Sahyadri, which means 'The Western Ghat section of knowledge'. It has university jurisdiction over malnad districts of Shivamogga and Chikmagaluru, through which the Sahyadri mountain ranges pass. The campus sprawls across an area of 230 acres.[6] The campus has an admixture of wild and domestic animals.</h2>

    </div>
  )
}

export default Front