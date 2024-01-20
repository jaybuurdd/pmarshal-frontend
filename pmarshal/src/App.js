import './tailwind.css';
import './App.css';
import Navbar from './layouts/navbar/Navbar';
import BasicCard from './shared/Card Elements/BasicCard';

function App() {
  const walletInfo = {
    title: 'Wallet Details',
    fields: [
      { label: 'Balance', value: '1.00 ETH / $2,482.35' },
    ],
  };
  return (
    // This div will cover the entire viewport with the specified background color
    <div className="min-h-screen bg-custom-matt-700"> 
      <div className="mx-auto px-4">
        <Navbar />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <BasicCard title={walletInfo.title} fields={walletInfo.fields} width='100%' height='27rem' topPadding='10'/>
            <BasicCard title={walletInfo.title} fields={walletInfo.fields} width='100%' height='16rem' topPadding='5'/>
            {/* More cards in the left column */}
          </div>
          <div>
            <BasicCard title={walletInfo.title} fields={walletInfo.fields} width='100%' height='17rem' topPadding='10'/>
            <BasicCard title={walletInfo.title} fields={walletInfo.fields} width='100%' height='7rem' topPadding='10'/>
            <BasicCard title={walletInfo.title} fields={walletInfo.fields} width='100%' height='15rem' topPadding='10'/>
            {/* More cards in the right column */}
          </div>
          <BasicCard title={walletInfo.title} fields={walletInfo.fields} height='7rem' topPadding='1'/>
        </div>
      </div>
    </div>
  );
}

export default App;
