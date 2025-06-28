import React, { useRef } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
const App = () => {
  const ref=useRef(null);
  let data=[
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      filesize: '0.9 mb',
      close: true,
      tag: {isopen: true, tagtitle: 'Download Now',tagcolor: 'bg-yellow-600'},
      
    },
    {
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      filesize: '0.66 mb',
      close: true,
      tag: {isopen: true, tagtitle: 'Download Now',tagcolor: 'bg-green-600'},
      
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      filesize: '1.8 mb',
      close: true,
      tag: {isopen: true, tagtitle: 'Download Now',tagcolor: 'bg-green-600'},
      
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      filesize: '0.5 mb',
      close: true,
      tag: {isopen: true, tagtitle: 'Download Now',tagcolor: 'bg-green-600'},
      
    },
  ]
  return (
    <div>
      <div className="main">
      <div className="header">
          <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      
        <div className="footer-main flex-shrink-0"ref={ref}>
          {data.map((item,index) => (
            <div key={index}>
              <Footer data={item} ref={ref}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

// Footer.jsx

