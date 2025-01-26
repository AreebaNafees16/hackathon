import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "3219aikw",
  dataset: "production",
  useCdn: false,
  apiVersion: '2025-01-07',
});