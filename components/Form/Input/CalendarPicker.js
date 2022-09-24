export default function CalendarPicker(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      type="date"
      onChange={handleChange}
      className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  );
}
