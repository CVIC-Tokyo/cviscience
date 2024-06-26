import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import "../../../styles/globals.css";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "announcement" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          entitle,
          contentImage,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function AnnouncementPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullAnnouncement = await getData(params.slug);
  console.log(data);

  return (
    <div className="page-container bg-white">
      <div className="flex flex-col items-center justify-center p-2 md:p-4">
        {/* <Image
          src={urlFor(data.titleImage).url()}
          width={300}
          height={300}
          alt="Title Image"
          priority
          className="rounded-lg mt-8 border"
        /> */}
        <h1>
          <span className="mt-2 block text-3xl text-center text-cvic-red leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
        </h1>
        <h1>
          <span className="mt-2 block text-3xl text-center text-cvic-red leading-8 font-bold tracking-tight sm:text-4xl">
            {data.entitle}
          </span>
        </h1>
        <Image
          src={urlFor(data.contentImage).url()}
          width={350}
          height={350}
          alt="Content Image"
          priority
          className="rounded-lg mt-8 border"
        />

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}
