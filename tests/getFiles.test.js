import { getFiles } from "../lib/mdx-processor"

describe("Check to get the file informations corresponding to the category", () => {
  test("Check if we have any files"),
    async () => {
      const files = await getFiles([{ file, folderName }])
    }
  expect(files.length > 0)
})
