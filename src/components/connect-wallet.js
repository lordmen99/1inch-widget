import React from 'react';

function ConnectWallet(props) {
  return (
    <span class='inline-flex rounded-md shadow-sm my-6 justify-center w-full'>
      <button
        type='button'
        onClick={() => props.setActiveModal('wallet')}
        class='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-blue-400 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='mr-4 fill-current'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6 2C3.79086 2 2 3.79086 2 6V8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6C18 3.79086 16.2091 2 14 2H6ZM16 6H4C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6ZM4 18V8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H14Z'
          />
        </svg>
        Connect Wallet
      </button>
    </span>
  );
}

export default ConnectWallet;
