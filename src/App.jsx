import React from 'react'
import Issues from './Issues'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Details from './Details'





export default function App() {
  return (
    <>

        <Router>
            <div className=''>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path='/' element={<Issues/>} />
                        <Route path='/issues/:id' element={<Details/>} />
                    </Routes>
                    
                </div>
                
            </div>
        </Router>
    </>
  )
}
