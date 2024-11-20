import { getApiDocs } from "@/lib/swagger";

import ReactSwagger from "./react-swagger";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <a href="/" className="text-xl font-bold underline underline-offset-4 hover:no-underline hover:cursor-pointer">
        Go home
      </a>
      <ReactSwagger spec={spec} />
    </section>
  );
}
