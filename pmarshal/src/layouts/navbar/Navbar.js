import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import useStore from '../../zustand/store';
import useTransStore from '../../zustand/transactionsStore';
import AddWalletModal from '../../components/Pop-Ups/AddWalletModal';



const Navbar = () => {
    const [ wallets, setWallets ] = useState([]);
    // const [ selectedWallet, setSelectedWallet ] = useState(null);
    
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const response = await axios.get('/wallets/all'); // Adjust the endpoint as needed
                setWallets(response.data);
            } catch (error) {
                console.error('Error fetching wallets:', error);
            }
        };

        fetchWallets();
    }, []);

    const preview = wallets.slice(0,3);
    const setSelectedWallet = useStore(state => state.setSelectedWallet);
    const { setTransactions } = useTransStore();
    // const setTransactions = useStoreTransactions(state => state.setTransactions);

    const handleWalletSelect = async (wallet) => {
        console.log('selected wallet is: ', wallet);
        try {
            // fetch transactions
            const res = await axios.post('/transactions/all', { walletAddress: wallet.address });
 
            setTransactions(res.data);
            setSelectedWallet(wallet);
            setDropDownOpen(false);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className='flex items-center justify-between bg-custom-matt-black p-6 rounded-full shadow-lg'>
            <div className='relative pt-4'>
                <div className='flex -space-x-2'>
                    {preview.map((wallet, index) => (
                        <img 
                            key={index}
                            src='./dummy_data/nav/wallet_1.png'
                            alt={`Wallet ${index}`}
                            className='h-6 w-6 rounded-full'
                            style={{ zIndex: preview.length - index }}
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
                    <div className='absolute left-0 mt-1 py-2 w-96 bg-white rounded-md shadow-lg z-10'>
                        <ul>
                            {wallets.map((wallet, index) => (
                                <li 
                                    key={index} 
                                    className='flex items-center px-4 py-2 hover:bg-gray-100'
                                    onClick={() => handleWalletSelect(wallet)}
                                >
                                    <img src='./dummy_data/nav/wallet_1.png' alt={`Wallet ${index + 1}`} className='h-6 w-6 rounded-full mr-2' />
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
            />   
        </nav>
    );
}



export default Navbar;
