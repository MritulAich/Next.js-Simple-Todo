

export default function Home() {
  return (
    <div>
      <div className="overflow-x-auto flex justify-center">
  <table className="table bg-emerald-300 border border-black">

    <thead>
      <tr className="border border-black bg-slate-200">
        <th>Date</th>
        <th>Work</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="border border-black">
        <td className="p-4">01/12/2023</td>
        <td className="p-6">Go to Laundry</td>
        <td className="flex gap-2 p-4">
          <button className="bg-amber-600 text-slate-100 p-2 rounded-lg">Update</button>
          <button className="bg-red-600 text-slate-100 p-2 rounded-lg">Delete</button>
          </td>
      </tr>
      
      
      
      
    </tbody>
  </table>
</div>
    </div>
  );
}
