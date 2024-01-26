import React from 'react'

const Card = ({ data }) => {
    return (
        <>
            {
                data.map((curuser) => {
                    const { id, links, prefix } = curuser
                    return (
                        <tr className=''>
                            <td>{id}</td>
                            <td>{links}</td>
                            <td>{prefix}</td>
                        </tr>
                    )
                })}
        </>
    )
}

export default Card
