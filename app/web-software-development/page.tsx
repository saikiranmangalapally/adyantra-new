import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function WebSoftwareDevelopmentPage() {
  const data = serviceDataMap["web-software-development"];
  return <ServicePageTemplate pageTitle="Next.js & React Web Software" data={data} />;
}
