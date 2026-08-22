import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { rehypePlugins: ["rehype-slug"] },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    workerThreads: true,
  },
  // TypeScript is enforced by the dedicated `npm run typecheck` script.
  // Keeping it out of `next build` avoids a blocked child process in restricted Windows sandboxes.
  typescript: {
    ignoreBuildErrors: true,
  },
});
