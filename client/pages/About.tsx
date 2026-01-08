import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<BookOpen className="w-16 h-16" />}
        title="About NGO"
        description="Learn about our organization, history, mission, vision, and the team behind our work."
      />
    </Layout>
  );
}
