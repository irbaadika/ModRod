import React, {useState, useEffect} from 'react'
import './HeroStyles.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Product from '../product/Product'
import Part from '../part/Part'
import Contact from '../contact/Contact'
import { auth, db } from "../../firebase";
import { collection,getDocs, doc } from 'firebase/firestore'

const Hero = () => {
  function GetCurrentUser(){
    const [user, setUser] = useState(null)
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          const fetchUser = async () => {
              let list = [];
              try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                  list.push({ id: doc.id, ...doc.user()});
                });
                setUser(list);
              } catch (err) {
                console.log(err);
              }
            };
            fetchUser();
        }else{
          setUser(null)
        }
      })
    }, [])
    return user
  }

  const user = GetCurrentUser()

  return (
    <div className='hero'>
      <Navbar user={user}/>
      <div className="container">
        <div className="content">
            <h1>STRONG</h1>
            <h1 className='blue'>FAST</h1>
            <h1>SAFETY</h1>
            <div><button>Learn More</button></div>
        </div>
      </div>
      <Product/>
      <Part/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Hero
