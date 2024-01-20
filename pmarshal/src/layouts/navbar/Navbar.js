import React, { useState } from 'react';

import AddWalletModal from '../../components/Pop-Ups/AddWalletModal';

const dummyWallets = [
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'},
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'},
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'},
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'},
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'},
    {img: './dummy_data/nav/wallet_1.png', address: '0x123...', balance: '1.00 ETH'} 
];

const previewWallet = dummyWallets.slice(0,3);

const Navbar = () => {
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleAddWallet = (walletAddress) => {
        console.log("Wallet Address", walletAddress);
    }

    return (
        <nav className='flex items-center justify-between bg-custom-matt-black p-6 rounded-full shadow-lg'>
            <div className='relative pt-4'>
                <div className='flex -space-x-2'>
                    {previewWallet.map((wallet, index) => (
                        <img 
                            key={index}
                            src={wallet.img}
                            alt={`Wallet ${index}`}
                            className='h-6 w-6 rounded-full'
                            style={{ zIndex: previewWallet.length - index }}
                        />
                    ))}
                    <div>
                        <button 
                            className='ml-4 bg-custom-matt-700 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100'
                            onClick={() => setDropDownOpen(!dropDownOpen)
                            }>
                            {dropDownOpen ? '↑' : '↓'}
                        </button>
                    </div>
                </div>
                {dropDownOpen && (
                    <div className='absolute left-0 mt-1 py-2 w-64 bg-white rounded-md shadow-lg z-10'>
                        <ul>
                            {dummyWallets.map((wallet, index) => (
                                <li key={index} className='flex items-center px-4 py-2 hover:bg-gray-100'>
                                    <img src={wallet.img} alt={`Wallet ${index + 1}`} className='h-6 w-6 rounded-full mr-2' />
                                    <div>
                                        <div className="text-sm font-semibold">{wallet.address}</div>
                                        <div className="text-xs text-gray-600">{wallet.balance}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>    

            {/* Wallet Connection button */} 
            <button 
                className='bg-custom-matt-700 text-black font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100'
                onClick={() => setIsModalOpen(true)}                
            >
                + Add Wallet
            </button>   

            <AddWalletModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddWallet}
            />   
        </nav>
    );
}



export default Navbar;
