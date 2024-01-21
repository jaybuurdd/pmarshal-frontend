import React from 'react';
import WalletBalance from '../components/Cards/WalletBalance';
import Transactions from '../components/Cards/Transactions';

function WalletDataPage() {
  return (
    <>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <WalletBalance />
            </div>
        </div>
        <Transactions />
    </>
  )
}

export default WalletDataPage