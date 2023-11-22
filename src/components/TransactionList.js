import React from 'react'
import { INR_SYMBOL } from '../App'

export const TransactionList = () => {
  return (
    <>
        <h3>Transaction History</h3>
        <ul  className='list'>
            <li className='minus'>
                Cash <span> - {INR_SYMBOL} 0.0</span> <button className='delete-btn'>x</button>
            </li>
            <li className='plus'>
                Cash <span> + {INR_SYMBOL} 0.0</span> <button className='delete-btn'>x</button>
            </li>

        </ul>
        
    </>
  )
}
