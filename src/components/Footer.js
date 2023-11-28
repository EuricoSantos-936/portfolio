import React from 'react';

function Footer() {
  return (
    <div className='footer' >
    <div bgcolor='light' className='text-center text-lg-left'>
      <div className='text-center text-light p-3' style={{  backgroundColor: 'rgba(100, 23, 138, 0.8)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='/'>EuricoSantos</a>
      </div>
    </div>
    </div>
  );
}
export default Footer