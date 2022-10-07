# Conception

Conception is an Idea sharing platform where you can find ideas on every niche. The best part is you can share your ideas through a PR.

![homepage-conception](https://user-images.githubusercontent.com/70762571/167148564-eb66f324-e479-450b-a2e9-d699e77ab065.png)

## Project Purpose

I am a huge enthusiast of open source. Contributing to open source is a fantastic way to learn and grow. Moreover, Conception is an idea sharing platform, where other than contributing code, you can contribute your ideas by writing your idea in a markdown file and raising a PR.

## General Idea

Conception is a platform where you can find ideas on every niche. Maybe you want to build a application but you may thinking for a best idea. In conception you can find ideas and bring that idea into real.

## Current State

As of now, Conception is built using [Next.js](https://nextjs.org/) and [MDX](https://mdxjs.com/)

Inorder to contribute ideas to Conception there is only one way (as of now). That is through writing your ideas in a Markdown file.

In future, Conception supports Strapi (Headless CMS) to write your ideas.

## Getting Started

### Setting up the repository

Fork the repository at - [roopeshsn/conception](https://github.com/roopeshsn/conception) to your GitHub account.

Then clone the forked repository, by typing the following line in your local terminal/powershell. Remember to replace `<your-username>` with your actual GitHub username.

```bash
git clone https://github.com/<your-username>/conception.git
```

Navigate to the cloned repository on your local system

```bash
cd conception
```

Add remotes to the parent repository. This will help you fetch the code from the
parent repo to avoid any merge conflicts later.

```bash
git remote add upstream https://github.com/roopeshsn/conception.git
```

To verify, use the command `git remote -v` to check if you have two remotes - origin and upstream set up.

Finally, fetch the upstream's latest code from the `mdx-version` branch. Note that `mdx-version` is the default main branch.

```bash
git fetch upstream mdx-version
```

### Next steps

Now install packages with NPM:

```bash
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Please check out [CONTRIBUTING.md](CONTRIBUTING.md) for more information regarding how to contribute.
