export default function InputHiddenLabel(props) {
  return (
    <div>
      <label htmlFor={props.name} className="sr-only">
        {props.label}
      </label>
      <input
        {...props}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
