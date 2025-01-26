import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({

  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// dataset: "production",
// apiVersion: "2025-01-07",
// useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation