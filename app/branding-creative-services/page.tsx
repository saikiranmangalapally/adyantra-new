import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function BrandingCreativeServicesPage() {
  const data = serviceDataMap["branding-creative-services"];
  return <ServicePageTemplate pageTitle="Branding & Creative Services" data={data} />;
}
