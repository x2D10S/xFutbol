import React from 'react'
import Bdor from '../Bdor'

const BdorPage = ({isAdmin}) => {
    return (
        <div>
            <Bdor isAdmin={isAdmin} />
        </div>
    )
}

export default BdorPage
