export default function Textarea({ type, name, value, onChange, error }) {
  return (
    <div>
      <textarea
        type={type || "text"}
        className={`block w-full px-4 py-2 mt-2 mb-2 border-black border-2 rounded-md bg-gray-200 ${
          error ? "border-red-700" : ""
        } border-2`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div>
          <br />
          <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
}
