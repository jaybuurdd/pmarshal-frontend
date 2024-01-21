import React from 'react';
import BasicCard from '../../shared/Card Elements/BasicCard';
import useStore from '../../zustand/store';

function WalletBalance() {
    const selectedWallet = useStore(state => state.selectedWallet);

    const walletFields = selectedWallet ? [
        { label: 'Address', value: selectedWallet.address },
        { label: 'Balance', value: selectedWallet.balance }
    ] : [];

  return (
    <div>
        <BasicCard title="ETH Balance" fields={walletFields} width='100%' height='10rem' topPadding='10'/>
    </div>
    
  )
}

export default WalletBalance