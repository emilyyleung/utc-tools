export default function InputHiddenLabel({
  label,
  name,
  type,
  id,
  placeholder,
  value,
  setValue,
}) {
  const handleChange = (e) => {
    console.log('y', e.target.value);
    setValue(e.target.value);
  };

  const inputProps = {
    label,
    name,
    type,
    id,
    placeholder,
    value,
  };
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
