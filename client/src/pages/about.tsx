import Header from "../components/header";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">About News Analysis</h1>
          <p className="text-lg text-gray-700 mb-4">
            News Analysis is a lightweight news explorer that surfaces political news with
            concise AI-generated summaries and a simple sentiment/emotion indicator. It supports
            English and Hindi articles and aims to make it faster to skim and understand breaking
            political stories.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">How it works</h2>
          <p className="text-gray-700 mt-2">
            The app fetches top headlines from a news API, performs a short summarization pass,
            and applies a heuristic sentiment analysis to provide a quick emotional snapshot.
            Click any article card to view the AI summary and detected dominant emotion.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">Contact & Feedback</h2>
          <p className="text-gray-700 mt-2">
            This is an experimental project. Feedback and contributions are welcome — open an
            issue on the repository or reach out to the maintainer.
          </p>

          <div className="mt-6">
            <Link href="/" className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
