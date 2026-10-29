import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { serviceDataMap } from "@/lib/data/serviceData";

export default function EcommerceSolutionsPage() {
  const data = serviceDataMap["ecommerce-solutions"];
  return <ServicePageTemplate pageTitle="E-Commerce Architecture & Scaling" data={data} />;
}
