export default function SimpleStats({ data }) {
  return (
    <div className="min-w-full">
      <dl className="mt-5 grid grid-flow-col auto-cols-fr gap-3 md:gap-5 px-5 md:px-0">
        {data.map((item) => (
          <div
            key={item.key}
            className="overflow-hidden rounded-lg bg-white py-2 md:py-5 shadow text-center"
          >
            <dt className="truncate text-xs md:text-sm font-medium text-gray-500">
              {item.key}
            </dt>
            <dd className="mt-1 text-lg md:text-3xl font-bold tracking-tight text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
