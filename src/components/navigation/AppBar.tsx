import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// interface DropdownProps {
//   options: { value: string; label: string }[];
//   onSelect: (value: string) => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
//   return (
//     <select onChange={(e) => onSelect(e.target.value)}>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };



const AppBarCustom: React.FC = () => {
  // const handleSelect = (value: string) => {
    
  // };

  const navigate = useNavigate();

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#b90606ff',
      padding: '8px 2px',
      // paddingTop: 0,
      height: '50px'
    }}>
      <span style={{ float: 'left', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
        <h1
          style={{
            fontSize: `${4}rem`,
            fontFamily: "'MartianRobotics'",
            color: 'black',
            margin: 0,
            padding: 0,
            textAlign: 'left',
            cursor: 'pointer'
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          Ashton Murphy
        </h1>
      </span>

      <span style={{ float: 'right', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
        {/* <Dropdown options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          // ...
        ]} onSelect={handleSelect} /> */}
      </span>
    </div>
  );
};

export default AppBarCustom;