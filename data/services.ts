// service interface
export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export const ServicesData: Service[] = [
  {
    title: "Web Development",
    icon: "code",
    description:
      "Custom websites built with clean, efficient code and modern web standards for optimal performance and user experience.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "SEO Best Practices",
    ],
  },
  {
    title: "UI/UX Design",
    icon: "paint-brush",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront, ensuring engagement and satisfaction.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    title: "Mobile Development",
    icon: "mobile",
    description:
      "Cross-platform mobile applications that deliver native performance with a single codebase.",
    features: [
      "React Native Development",
      "iOS & Android",
      "Offline Capabilities",
      "App Store Deployment",
    ],
  },
  {
    title: "Backend Development",
    icon: "server",
    description:
      "Robust backend systems and APIs that power your applications with security and scalability in mind.",
    features: [
      "API Development",
      "Database Design",
      "Authentication",
      "Cloud Integration",
    ],
  },
  {
    title: "E-commerce Solutions",
    icon: "shopping-cart",
    description:
      "Complete e-commerce solutions from product catalog to payment processing and order management.",
    features: [
      "Shopping Cart Integration",
      "Payment Gateways",
      "Inventory Management",
      "Order Processing",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: "wrench",
    description:
      "Ongoing support and maintenance to keep your website running smoothly and securely.",
    features: [
      "Regular Updates",
      "Security Patches",
      "Performance Monitoring",
      "Technical Support",
    ],
  },
];
