function plopfile(plop) {
  const { getAllCategories } = require("./utils/filesystem");
  const date = new Date(Date.now());
  let categories = getAllCategories();
  plop.setHelper("createdAt", () => {
    return date.toString();
  }),
    plop.setGenerator("newIdea", {
      description: "generate new idea post",
      prompts: [
        {
          type: "input",
          name: "title",
          message: "Title of idea:",
        },
        {
          type: "input",
          name: "summary",
          message: "Summary of idea:",
        },
        {
          type: "input",
          name: "category",
          message: `Category (available categories: ${categories}): `,
        },
        {
          type: "input",
          name: "tags",
          message: "Tags (Enter tags each separated by a comma):",
        },
        {
          type: "input",
          name: "author",
          message: "Author:",
        },
      ], // array of inquirer prompts
      actions: [
        {
          type: "add",
          path: `db/all-ideas/{{dashCase category}}/{{dashCase title}}.mdx`,
          templateFile: "plop-templates/idea-post.hbs",
        },
      ], // array of actions
    });
}

module.exports = plopfile;
