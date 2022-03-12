import {
  Container,
  Flex,
  Grid,
  GridItem,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import categories from "../db/categories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conception</title>
        <meta name='description' content='Conceptions you need' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='container.xl' centerContent>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {categories.map((category) => {
            return (
              <GridItem key={category.key}>
                <Link href={`/${category.href}`} passHref>
                  <ChakraLink>
                    <Text fontSize='xl'>{category.title}</Text>
                  </ChakraLink>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), "pages/ideas");
//   const fileNames = await readdir(postsDirectory);

//   const files = await Promise.all(
//     fileNames.map(async (fileName) => {
//       const filePath = path.join(postsDirectory, fileName);
//       const content = await readFile(filePath, "utf-8");
//       // const matter = grayMatter(content);
//       const mdxSource = await serialize(matter.content, {
//         mdxOptions: {
//           remarkPlugins: [],
//           rehypePlugins: [],
//           hastPlugins: [],
//           compilers: [],
//           filepath: "templates/ideas.js",
//         },
//         parseFrontmatter: true,
//       });

//       return {
//         fileName,
//         mdxSource,
//       };
//     })
//   );

//   const posts = files.map((file) => {
//     return {
//       path: `/posts/${file.fileName.replace(".mdx", "")}`,
//       title: file.mdxSource.frontMatter.title,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }
