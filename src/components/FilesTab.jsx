export default function FilesTab() {
  return (
    <div className="flex flex-col gap-4">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Upload File</button>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#" className="text-indigo-400 hover:underline">Evidence_1.pdf</a>
        </li>
        <li>
          <a href="#" className="text-indigo-400 hover:underline">Photo_2.jpg</a>
        </li>
      </ul>
    </div>
  );
}