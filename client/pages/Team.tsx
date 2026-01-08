import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Users } from "lucide-react";

export default function Team() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Users className="w-16 h-16" />}
        title="Our Team & Members"
        description="Meet our dedicated team members and volunteers who are making a difference. Register to join us!"
      />
    </Layout>
  );
}
