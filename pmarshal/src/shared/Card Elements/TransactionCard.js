import React from 'react';

const TransactionCard = ({ title, transactions, topPadding }) => {
    // Dynamic top padding based on the prop
    const topPaddingStyle = {
        paddingTop: topPadding ? `${topPadding * 0.25}rem` : '0'
    }

    return (
        <div style={topPaddingStyle}>
            <div className='bg-custom-matt-white hover:bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
                <h3 className='text-lg font-bold mb-2'>{title}</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-xs font-semibold text-left">Time Stamp</th>
                                <th className="text-xs font-semibold text-left">From</th>
                                <th className="text-xs font-semibold text-left">To</th>
                                <th className="text-xs font-semibold text-left">Value</th>
                                <th className="text-xs font-semibold text-left">Gas</th>
                                <th className="text-xs font-semibold text-left">Gas Price</th>
                                <th className="text-xs font-semibold text-left">Is Error</th>
                                <th className="text-xs font-semibold text-left">Tx Receipt Status</th>
                                <th className="text-xs font-semibold text-left">Confirmations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index} className="text-xs">
                                    <td>{transaction.timeStamp}</td>
                                    <td>{transaction.from}</td>
                                    <td>{transaction.to}</td>
                                    <td>{transaction.value}</td>
                                    <td>{transaction.gas}</td>
                                    <td>{transaction.gasPrice}</td>
                                    <td>{transaction.isError}</td>
                                    <td>{transaction.txreceipt_status}</td>
                                    <td>{transaction.confirmations}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionCard;
