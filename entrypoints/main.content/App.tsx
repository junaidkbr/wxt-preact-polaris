import { useState } from 'preact/hooks';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('1');

  return (
    <>
      <s-select
        label="Presets"
        labelAccessibilityVisibility="exclusive"
        value={selectedValue}
        onChange={(e) => {
          const target = e.target as HTMLSelectElement;

          console.log('s-select:onChange');
          console.log('s-select:target', target);
          console.log('s-select:value', target.value);
        }}
      >
        <s-option value="1">Option 1</s-option>
        <s-option value="2">Option 2</s-option>
        <s-option value="3">Option 3</s-option>
      </s-select>
    </>
  );
}
