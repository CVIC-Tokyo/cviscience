import { Button, Card } from "@nextui-org/react";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";


async function getData() {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

const SanityCards =async () => {
    const data: simpleBlogCard[] = await getData();

    return (
        <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 p-4">
            {data.map((post, idx) => (
                <Card key={idx}>
                <Image
                    src={urlFor(post.titleImage).url()}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-t-lg h-[200px] object-cover"
                />

                <Card className="mt-5">
                    <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {post.smallDescription}
                    </p>
                    <Button className="w-full mt-7">
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                    </Button>
                </Card>
                </Card>
            ))}
        </div>
    )
}

export default SanityCards;