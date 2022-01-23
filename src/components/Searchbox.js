import React from 'react';

const Searchbox = ({Searchfeild,SearchChange})=> {
  return (
  	<div className='pa2'>
    <input
     className='pa3 ba b--green bg-lightest blue'
    type='Search'
     placeholder='Search robots'
     onChange={SearchChange }
     />
   </div>
   );


}
export default Searchbox;