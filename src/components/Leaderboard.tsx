import React from "react";

interface PlayerStat {
  name: string,
  points: number,
  matches: number,
}

interface LeaderboardProps {
  data: PlayerStat[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
    return (
      <div className="border w-full max-w-md">
        <h2 className="text-lg font-bold text-center mb-2">🏆 Leaderboard</h2>
        <table className="border w-full border-gray-200">
          <thead className="bg-gray-200">
            <tr className="border">
              <th className="border px-2 py-1">#</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Points</th>
              <th className="border px-2 py-1">Matches</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) => b.points - a.points)
              .map((player, index) => (
                <tr>
                  <td className="border px-2 py-1 text-center">{index + 1}</td>
                  <td className="border px-2 py-1 text-center">
                    {player.name}
                  </td>
                  <td className="border px-2 py-1 text-center">
                    {player.points}
                  </td>
                  <td className="border px-2 py-1 text-center">
                    {player.matches}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
}

export default Leaderboard;