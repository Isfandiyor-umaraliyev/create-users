// style
import './App.css'

import { useState } from 'react'
// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/UserList'
import NewUserForm from './components/newuser/NewUserForm'


function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  
  
  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  // close modal
  const closeModal = (e) => {
     if (e.target.classList.value === 'overlay') setShowModal(false)
     if (e.key === "Escape") setShowModal(false)
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar userslength={users.length}/>
        <main>
          {!users.length && <div className='no-users'>
            <h2>No users</h2>
          </div> }
          <UserList users={users} deleteUser={deleteUser} />
        </main>
      <Footer/>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
    </div>
  )
}

export default App




// import './App.css'

// import { useState } from 'react'
// // components
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'
// import UserList from './components/userlist/UserList'
// import NewUserForm from './components/newuser/NewUserForm'


// function App() {
//   const [newUser, setnewUser]= useState(false)
//   const [users, setUsers] = useState([])
// const createUser = ()=>setnewUser(true)

// const addUser = (user) => {
//   setUsers((prev) => {
//     return [...prev, user]
//   })
//   setnewUser(false)
// }

//   return (
//     <div  className="App">
//       <Navbar />
//         <main>
//           <UserList />
//         </main>
//       <Footer/>
//     { newUser &&  <NewUserForm addUser={addUser}/>}
//       <button  className='create-user' onClick={createUser}>Create User</button>
//     </div>
//   )
// }

// export default App
