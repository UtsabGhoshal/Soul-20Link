import Layout from "../components/Layout";
import PlaceholderPage from "../components/PlaceholderPage";
import { Newspaper } from "lucide-react";

export default function News() {
  return (
    <Layout>
      <PlaceholderPage
        icon={<Newspaper className="w-16 h-16" />}
        title="Latest News & Updates"
        description="Stay updated with our latest news, press releases, and success stories from across India."
      />
    </Layout>
  );
}
