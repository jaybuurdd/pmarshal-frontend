import './tailwind.css';
import './App.css';
import useStore from './zustand/store';
import Navbar from './layouts/navbar/Navbar';
import WalletDataPage from './pages/WalletDataPage';


function App() {
  const walletInfo = {
    title: 'Wallet Details',
    fields: [
      { label: 'Balance', value: '1.00 ETH / $2,482.35' },
    ],
  };

  const selectedWallet = useStore(state => state.selectedWallet);

  return (
    <div className="min-h-screen bg-custom-matt-700"> 
      <div className="mx-auto px-4">
        <Navbar />
        <div className='pt-4 text-xl font-bold text-center italic'> {selectedWallet?.address ? selectedWallet.address : ""} </div>
        {selectedWallet 
          ? <WalletDataPage />
          : <div className='text-center'> Select A Wallet to View </div>
        }      
      </div>
    </div>
  );
}

export default App;
