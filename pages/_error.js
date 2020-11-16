import React from 'react'

export default (props) => {
    return (
        <p>
            {props.statusCode
                ? `An error ${props.statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}
