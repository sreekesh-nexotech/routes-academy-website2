import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { courses } from '@/components/ui/Courses/CourseData';

const baseUrl = 'https://yourdomain.com'; // update this

function getAllAppRoutes(dirPath: string, parentRoute = ''): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.name.startsWith('api') || entry.name.startsWith('_')) continue;

    if (entry.isDirectory()) {
      const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx'));
      if (hasPage) {
        const cleanName = entry.name.startsWith('[')
          ? ''
          : `/${entry.name}`;
        routes.push(parentRoute + cleanName);
      }
      routes = [...routes, ...getAllAppRoutes(fullPath, parentRoute + '/' + entry.name)];
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src/app');

  const staticRoutes: MetadataRoute.Sitemap = getAllAppRoutes(appDir).map((route) => ({
    url: `${baseUrl}${route === '/page.tsx' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // 👈 Use a literal type
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const, // 👈 Use literal type
    priority: 0.9,
  }));

  return [...staticRoutes, ...courseRoutes];
}
