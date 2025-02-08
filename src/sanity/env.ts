export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "sk3kUpol3T1LPt55CP7YWtylZ1Gbk5TbELce1pl0dRqgjMclIeUD2Ej6GTG9gpcPvE5i0IqX9TC3wHuuY4g2ygjLlxwrZ1gLAiCU8TlvGTL1R280Q5nuPSeTKP1RRtr8rnBx78o7OgLgsHdP1jE5zKmlSbyMKejOMCJVLvXbYTc0XHYyWWm4",

  'Missing environment variable:SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
