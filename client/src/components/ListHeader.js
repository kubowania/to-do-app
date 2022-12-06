import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Modal from './Modal'

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowModal] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const signOut = () => {
    removeCookie("AuthToken")
    removeCookie("Email")
    window.location.reload()
  }


  return (
    <li className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      {showModal && (
        <Modal mode={'create'} setShowModal={setShowModal} getData={getData} />
      )}
    </li>
  )
}

export default ListHeader
