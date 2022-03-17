import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, ActionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='container text-center mt-5'>
            <h1>Withdraw / Deposit</h1>
            <button onClick={() => { withdrawMoney(100) }} className='btn btn-danger m-3 px-5'> - </button>
            <button onClick={() => { depositMoney(100) }} className='btn btn-success  m-3 px-5'> + </button>

        </div>
    )
}

export default Shop
