/** @module repo-package-json */

import json5 from "json5"
import got from "got"
// import normalizePackageData from "normalize-package-data"

/**
 * @function
 * @async
 * @param {string} [repositorySlug]
 * @returns {Promise<import("normalize-package-data").Package>}
 * @example
 * import repoPackageJson from "repo-package-json"
 * const result = await repoPackageJson("Jaid/epoch-seconds")
 * result.version === "2.0.3"
 */
export default async repositorySlug => {
  const response = await got(`https://raw.githubusercontent.com/${repositorySlug}/master/package.json`)
  const pkg = json5.parse(response.body)
  // normalizePackageData(pkg) It uses require("fs") for readme check, not compatible with my universal build
  return pkg
}