import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance} from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';


export const INR_SYMBOL = '₹';

function App() {
  return (   
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div> 
      
    </>
 

  )
}

export default App;
