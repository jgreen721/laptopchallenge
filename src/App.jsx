import './App.css'
import React, {useEffect,useState} from "react"
import {Canvas} from "@react-three/fiber"
import {useGLTF,Clone,Html} from "@react-three/drei"



const Model = ()=>{
  const {scene} = useGLTF("laptop.glb")
  const [scale,setScale] = useState([])
  const [pos,setPos] = useState([])


  useEffect(()=>{
    if(innerWidth < 675){
      console.log("mobile size!")
        setScale([.3,.32,.27])
    }
    else{
      setScale([.35,.45,.37])

    }
  },[])

  return (
    <Clone object={scene} position={[0,-1,2]} scale={scale} rotation={[0,-Math.PI * .47,0]}/>
  )
}

function App() {
  const [pos,setPos] = useState([])



  useEffect(()=>{
    if(innerWidth < 675){
      console.log("mobile size!")
        setPos([-1.6,.57,0])
    }
    else{
      setPos([-2.1,1.28,0])

    }
  },[])

  return (
    <div className="app">
      <div className="overlay">
      <Canvas style={{height:'100vh'}}>
        <color attach="background"args={["black"]}/>
        <ambientLight intensity={3} position={[0,5,0]}/>
        <spotLight position={[0,2,0]}/>
        <Model/>
        <Html position={pos}>
          <div className="monitor">
            <div className="modal">
              <div className="mobile-modal-column">
                <img src="./images/illustration-sign-up-mobile.svg" alt="" />
              </div>
              <div className="modal-column">
                <h1>Stay updated!</h1>
                <p className="blurb">Join 60,000 product managers receiving monthly updates on:</p>
                <ul className="features-list">
                  <li className="feature-item">
                    <img src="./images/icon-list.svg" alt="" />
                    <p className="feature-item-p">Product discovery and building with matters.</p>
                  </li>
                  <li className="feature-item">
                    <img src="./images/icon-list.svg" alt="" />
                    <p className="feature-item-p">Measuring to ensure updates are a success.</p>
                  </li>
                  <li className="feature-item">
                    <img src="./images/icon-list.svg" alt="" />
                    <p className="feature-item-p">And much more.</p>
                  </li>
                </ul>
                <div className="form-div">
                  <label htmlFor="email-address">Email address</label>
                  <input type="text" name="email-address" className="form-control" autoComplete="off" placeholder="email@company.com" />
                </div>
                <button className="submit-btn">Subscribe to monthly newsletter</button>
              </div>
              <div className="modal-column desktop-column">
                {/* <img className="desktop-bg" src="./images/illustration-sign-up-desktop.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </Html>
        
      </Canvas>
      </div>
    </div>
  )
}

export default App
