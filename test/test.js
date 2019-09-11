import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: repoPackageJson} = indexModule

// it("should fetch a package.json", async () => {
//   const result = await repoPackageJson("Jaid/epoch-seconds")
//   expect(result).toMatchObject({
//     webpackConfigJaid: "universalLib",
//   })
// })

it("should throw for 404 responses", async () => {
  await expect(repoPackageJson("Jaid/404")).rejects.toThrow("Not Found")
})