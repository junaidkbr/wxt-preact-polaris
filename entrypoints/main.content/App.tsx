export default function App() {
  return (
    <>
      <s-stack direction="block">
        <s-select
          label="s-select"
          onInput={(e) => {
            const target = e.target as HTMLSelectElement;

            console.log('s-select:onInput');
            console.log('s-select:onInput:target', target);
            console.log('s-select:onInput:value', target.value);
          }}
          onChange={(e) => {
            const target = e.target as HTMLSelectElement;

            console.log('s-select:onChange');
            console.log('s-select:onChange:target', target);
            console.log('s-select:onChange:value', target.value);
          }}
        >
          <s-option value="1">Option 1</s-option>
          <s-option value="2">Option 2</s-option>
          <s-option value="3">Option 3</s-option>
        </s-select>
      </s-stack>

      <s-text-field
        label="Email"
        name="email"
        onInput={(e) => {
          const target = e.target as HTMLInputElement;

          console.log('s-text-field:onInput');
          console.log('s-text-field:onInput:target', target);
          console.log('s-text-field:onInput:value', target.value);
        }}
      />
    </>
  );
}
