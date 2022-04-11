import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import './style.css'

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(userData)

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <div className='giphy-container'>
            {userData.users.map(user =>
                <div key={user.id} className='giphy'>
                    <div className='img-container'>
                        <img src={user.images.original.url} width="300" height="300" />
                    </div>
                    <p>Username: {user.username}</p>
                    <p>Type: {user.type}</p>
                </div>
            )}</div>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)