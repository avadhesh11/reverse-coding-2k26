'use client'

import { useState, useEffect } from "react"
import { getLeaderboard } from "./_actions/getLeaderboard"
import Image from "next/image"
import { motion } from "framer-motion"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
})

type LeaderboardRow = {
  rank: number
  name: string
  cfHandle: string
  institute: string
  points: number
  problemsSolved: number
  penalty: number
}

export default function Page() {
  const [data, setData] = useState<LeaderboardRow[]>([])
  const [loading, setLoading] = useState(false)

  const fetchStandings = async () => {
    setLoading(true)
    const standings: LeaderboardRow[] = await getLeaderboard()
    setData(standings)
    setLoading(false)
  }
  useEffect(() => {
    fetchStandings()

    const intervalId = setInterval(() => {
      fetchStandings()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <main className="relative min-h-screen w-full text-white">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/tesseract-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 px-6 py-8 pt-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`${orbitron.className} text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-cyan-400 to-cyan-600/10 mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]`}>
            LEADERBOARD
          </h1>
          <div className="h-1 w-80 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </motion.div>

        {/* <div className="flex justify-center mb-6">
        <button
          onClick={fetchStandings}
          disabled={loading}
          className="px-6 py-3 bg-amber-400 text-black font-semibold rounded hover:bg-amber-300 disabled:opacity-50"
        >
          {loading ? data.length>0 ?"Refreshing": "Fetching..." : data.length>0? "Refresh Standings" :"Fetch Standings"}
        </button>
      </div> */}

        {data.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto border border-white/20 bg-black/40 backdrop-blur-md">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-left">Rank</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Institute Name</th>
                  <th className="p-3 text-left">CF Handle</th>
                  <th className="p-3 text-center">Problems Solved</th>
                  <th className="p-3 text-center">Points</th>
                  <th className="p-3 text-center">Penalty</th>
                </tr>
              </thead>

              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.cfHandle}
                    className="border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="p-3 font-semibold">{row.rank}</td>
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.institute}</td>
                    <td className="p-3 text-blue-400">
                      <a
                        href={`https://codeforces.com/profile/${row.cfHandle}`}
                        target="_blank"
                        className="hover:underline"
                      >
                        {row.cfHandle}
                      </a>
                    </td>
                    <td className="p-3 text-center">{row.problemsSolved}</td>
                    <td className="p-3 text-center text-amber-400 font-semibold">
                      {row.points}
                    </td>
                    <td className="p-3 text-center">{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )

}
