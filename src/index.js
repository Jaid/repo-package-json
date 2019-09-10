/** @module repo-package-json */

import json5 from "json5"
import ky from "ky-universal"
import normalizePackageData from "normalize-package-data"

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
  const body = await ky(`https://raw.githubusercontent.com/${repositorySlug}/master/package.json`).text()
  const pkg = json5.parse(body)
  normalizePackageData(pkg)
  return pkg
}