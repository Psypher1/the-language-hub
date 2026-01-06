// src/utils/getMenuFromCollection.js
import { getCollection } from "astro:content";

// Utility function to get menu from collection (only live content)
export async function getMenuFromCollection(learnPath) {
  // Filter for entries in this language path AND live status
  const allEntries = await getCollection("learn", ({ slug, data }) => {
    return slug.startsWith(`${learnPath}/`) && data.live === true;
  });

  // Group by lesson name and get the lowest part number for each
  const lessonMap = new Map();

  allEntries.forEach((entry) => {
    const lessonName = entry.slug.split("/")[1]; // e.g., "basics", "vowel-reduction"
    const part =
      typeof entry.data.part === "string"
        ? parseInt(entry.data.part, 10)
        : entry.data.part || 1;

    if (!lessonMap.has(lessonName) || lessonMap.get(lessonName).part > part) {
      lessonMap.set(lessonName, {
        name: lessonName,
        title: entry.data.title,
        part: part,
      });
    }
  });

  // Sort by part number and return lesson names
  return Array.from(lessonMap.values())
    .sort((a, b) => a.part - b.part)
    .map((item) => {
      // Convert slug to display name (e.g., "vowel-reduction" -> "Vowel Reduction")
      return item.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    });
}