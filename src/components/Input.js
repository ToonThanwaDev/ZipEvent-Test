export default function Input({ type, name, value, onChange, error }) {
  return (
    <div>
      <input
        type={type || "text"}
        className={`block w-full px-4 py-2 mt-2 border-black border-2 rounded-md bg-gray-200 ${
          error ? "border-red-700" : ""
        } border-2`}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && (
        <div>
          <br />
          <p className="text-sm text-red-600 dark:text-red-500 absolute">{error}</p>
        </div>
      )}
    </div>
  );
}
