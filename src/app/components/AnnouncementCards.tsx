import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

async function getData() {
  const query = `
    *[_type == 'announcement'] | order(_createdAt desc) {
      title,
      entitle,
      smallDescription,
      "currentSlug": slug.current,
      contentImage,
      titleImage
    }`;
    const data = await client.fetch(query);
    
    return data;
}

const AnnouncementCards = async () => {
    const data: simpleAnnouncementCard[] = await getData();
    console.log(data)

  return (
    <div className="max-w-[1300px] w-full m-8 md:m-20 border-t-2 border-b-2 border-cvic-red">
      <div className="bg-none md:bg-white w-full">
        <h1 className="text-cvic-red p-2 w-full text-lg md:text-2xl font-bold">
          ANNOUNCEMENTS
        </h1>
      </div>
      <div className="grid grid-cols-3 h-[150px] md:h-[250px] md:flex p-4 gap-2 md:gap-5 items-center justify-center w-full overflow-x-scroll md:overflow-auto">
        {data.map((post, idx) => (
          <div
          key={idx}
          className="w-full h-full flex items-center justify-center">
            <div
              className="bg-white rounded-xl shadow-lg w-[100px] h-[120px] md:h-[230px] md:w-[200px] p-1 md:p-2 relative pb-[40px] md:pb-[200px]"
            >
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={300}
                height={300}
                className="rounded-t-lg object-cover"
              />

              <div className="p-1 md:mt-1">
                <h3 className="text-[7px] md:text-sm line-clamp-2 font-bold">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-[6px] md:text-xs mt-2 text-gray-600 dark:text-gray-300">
                  {post.entitle}
                </p>
                <div className="rounded-b-xl w-full rounded-t-none mt-7 absolute bottom-0 left-0 bg-cvic-red/75 hover:bg-cvic-red text-white flex h-[25px] md:h-[50px] items-center justify-center">
                  <Link
                    className="flex flex-row items-center jusify-center text-[6px] md:text-sm"
                    href={`/announcements/${post.currentSlug}`}
                  >
                    Read More
                    <MdOutlineKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCards;
