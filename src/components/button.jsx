import React from 'react';

function Button({ btnName }) {
  return (
    <div class="btn p-2 px-4 bg-purple-800 rounded-full text-white">{btnName}</div>
  );
}

export default Button