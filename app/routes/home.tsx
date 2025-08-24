import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "JobFit AI" },
    { name: "description", content: "AI-powered resume checker for better job matches." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Smart Resume Checker for Perfect Job Matches</h1>
        <h2>Smart resume optimization made simple</h2>
      </div>

    {resumes.length > 0 && (
      <div className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </div>

)}
</section>

  </main>;
}
