/** @module repo-package-json */
import got from "got"
import json5 from "json5"
// import normalizePackageData from "normalize-package-data"

/**
 * @function
 * @async
 * @param {string} [repositorySlug]
 * @returns {import("normalize-package-data").Package}
 * @example
 * import repoPackageJson from "repo-package-json"
 * const result = await repoPackageJson("Jaid/epoch-seconds")
 * result.version === "2.0.3"
 */
export default async repositorySlug => {
  const result = await got(`https://raw.githubusercontent.com/${repositorySlug}/master/package.json`)
  const pkg = json5.parse(result.body)
  // normalizePackageData(pkg) It uses require("fs") for readme check, not compatible with my universal build
  return pkg
}