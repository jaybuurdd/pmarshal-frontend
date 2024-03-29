import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from '../../axiosConfig.js';

const AddWalletModal = ({ isOpen, onClose }) => {
    const [ errorMessage, setErrorMessage ] = useState('');

    const addNewWallet = async (walletAddress) => {
        try {
            const response = await axios.post('/wallets/addWallet', { walletAddress:walletAddress });
            onClose();
            return response.data;
        } catch (error) { 
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.msg);
            } else {
                setErrorMessage('An error occured while adding the wallet.');
            }
        }
    };
    
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <Formik
                    initialValues={{ walletAddress: '' }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        addNewWallet(values.walletAddress);
                        setSubmitting(false);
                        resetForm();
                    }}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="walletAddress" className="block text-gray-700 text-sm font-bold mb-2">
                                Wallet Address
                            </label>
                            <Field 
                                name="walletAddress"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {errorMessage && <p className="pb-4 text-red-500 font-bold text-lg italic">{errorMessage}</p>}
                        <div className="flex justify-end">
                            <button 
                                type="submit"
                                className="bg-custom-matt-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add Wallet
                            </button>
                            <button 
                                type="button"
                                onClick={onClose}
                                className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddWalletModal;