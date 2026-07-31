import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "service"] | order(order asc) { title, description, icon, order }`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  title, category, year, order, "imageUrl": mainImage.asset->url
}`;

// Featured projects for homepage — only top 4 by order
export const featuredProjectsQuery = groq`*[_type == "project"] | order(order asc) [0...4] {
  title, category, year, order, "imageUrl": mainImage.asset->url
}`;

export const detailedProjectsQuery = groq`*[_type == "project"] | order(order asc) {
  title, category, description, year, tags, color, order, "imageUrl": mainImage.asset->url
}`;

// NEW: Team Queries
export const teamQuery = groq`*[_type == "team"] | order(isCEO desc) {
  name, role, bio, isCEO, "imageUrl": image.asset->url
}`;

export const ceoQuery = groq`*[_type == "team" && isCEO == true][0] {
  name, role, bio, "imageUrl": image.asset->url
}`;

export const statsQuery = groq`*[_type == "stat"] | order(_createdAt asc)`;
export const pricingQuery = groq`*[_type == "pricing"] | order(order asc)`;

// Clients Marquee
export const clientsQuery = groq`*[_type == "client"] { name }`;

// Detailed Services (Full Data)
export const detailedServicesQuery = groq`*[_type == "service"] | order(order asc) {
  title, description, icon, category, features, color, order
}`;
export const contactQuery = groq`*[_type == "contactInfo"][0] {
  email, location, phone, instagram, linkedin
}`;