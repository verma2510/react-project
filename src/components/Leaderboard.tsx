import React from "react";

const Leaderboard: React.FC = () => {
    return (
      <div className="border">
        <table className="border">
          <tr className="border">
            <th className="border px-2 py-1">Sr. No.</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Points</th>
          </tr>
          <tr>
            <td className="border px-2 py-1">1</td>
            <td className="border px-2 py-1">Aman</td>
            <td className="border px-2 py-1">5</td>
          </tr>
        </table>
      </div>
    );
}

export default Leaderboard;