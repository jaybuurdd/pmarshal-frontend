import React from 'react'
import useTransStore from '../../zustand/transactionsStore';
import TransactionCard from '../../shared/Card Elements/TransactionCard';

function Transactions() {
    //const selectedTransactions = useTransStore(state => state.transactions);
    const selectedTransactions = useTransStore(state => state.transactions);

  return (
    <div>
        <TransactionCard title="Transactions" transactions={selectedTransactions} topPadding='10'/>
    </div>
  )
}

export default Transactions