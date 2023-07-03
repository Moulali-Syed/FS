import React, { useEffect, useState } from 'react';
import './AssignmentOne.css';
const AssignmentOne = () => {
  const [c, setC] = useState('');
  let hover = 'hover';
  function handleMouseover() {
    setC('inc');
  }
  function handleMouseOut() {
    setC('');
  }
  function submitHandler(e) {
    e.preventDefault();
  }
  function keypresshandler(e) {
    if (e.key == 'Enter') {
      alert(e.target.value);
    }
  }
  function printHandle() {
    window.print();
  }
  return (
    <div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2023/06/15/10/03/surfing-8065035_640.jpg"
          alt="high waves"
          onMouseOver={handleMouseover}
          onMouseOut={handleMouseOut}
          className={`${hover} ${c}`}
        />
      </div>
      <div>
        <button
          onClick={() => console.log('clicked')}
          onDoubleClick={() => alert('doubly clicked')}
        >
          Click
        </button>
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          onFocus={() => console.log('input box is focused')}
          onBlur={() => console.log('out of input box')}
        />
      </div>
      <div>
        <p
          onCopy={() => alert('text copied')}
          onCut={() => alert('tried cutting')}
          onPaste={() => console.log('pasted')}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          mollitia sint reprehenderit magnam deleniti odit? Qui optio est odit.
          Hic, nobis aliquam! Laboriosam cupiditate asperiores repellendus rem
          consequuntur eos veritatis.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler}>
        <input type="text" />
        <button>Submit</button>
      </form>

      {/* keypress */}
      <div>
        <input type="text" onKeyDown={keypresshandler} />
      </div>

      <div>
        <button onClick={printHandle}>Print</button>
      </div>
    </div>
  );
};

export default AssignmentOne;
