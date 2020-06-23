import React from 'react'

export default function Banner({data}) {
    // console.log(data)
    return (
        <div class="page-title-area bg-17" style={{background:`url(${data.image})`, backgroundSize:"cover"}}>
        <div class="container">
          <div class="page-title-content">
            <h2 style={{textTransform: 'capitalize'}}> {data.title} </h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>

              <li>Insurance</li>

              <li style={{textTransform: 'capitalize'}}>{data.title}</li>
            </ul>
          </div>
        </div>
      </div>

    )
}
