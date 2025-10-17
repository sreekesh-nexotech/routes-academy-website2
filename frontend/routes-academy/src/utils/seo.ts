import { courses } from "@/components/ui/Courses/CourseData";
import type { Metadata } from "next";

const defaultSEO: Metadata = {
  title: "Routes Academy | Learn from the Best",
  description:
    "Join Routes Academy to learn in-demand tech skills, get certified, and boost your career.",
  openGraph: {
    title: "Routes Academy | Learn from the Best",
    description:
      "Join Routes Academy to learn in-demand tech skills, get certified, and boost your career.",
    url: "https://routesacademy.website",
    siteName: "Routes Academy",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Routes Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Routes Academy | Learn from the Best",
    description:
      "Join Routes Academy to learn in-demand tech skills and become job-ready.",
    images: ["/web-app-manifest-512x512.png"],
  },
  metadataBase: new URL("https://routesacademy.website"),
  alternates: {
    canonical: "/",
  },
};

export default defaultSEO;



//for specific course seo
export function getCourseSEO(courseId: string): Metadata {
  const course = courses.find((c) => c.id === Number(courseId));

  if (!course) {
    return defaultSEO;
  }

  return {
    title: `${course.title} | Routes Academy`,
    description: course.description,
    openGraph: {
      ...defaultSEO.openGraph,
      title: `${course.title} | Routes Academy`,
      description: course.description,
      url: `https://routesacademy.in/courses/${course.id}`,
      images: [
        {
          url: course.image_url,
          width: 1200,
          height: 630,
          alt: `${course.title} | Routes Academy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Routes Academy`,
      description: course.description,
      images: [course.image_url],
    },
    alternates: {
      canonical: `https://routesacademy.in/courses/${course.id}`,
    },
  };
}