import { cn } from "../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Loader2, Scale } from "lucide-react";
import Link from "next/link";


export function BentoGridContainer() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <Link href={item.link} key={i}>
            <BentoGridItem
            title={item.title}
            //   description={item.description}
            header={  <div className="relative overflow-hidden w-full min-h-[6rem] max-h-20">
                            <img src={item.thumbnail} className="w-full min-h-20 object-cover object-top scale-125" />
                        </div>
        }
            icon={<Scale className="h-4 w-4 text-neutral-500" />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        </Link>
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
      title: 'Sceptre 24 inch Professional... vs ASUS VG248QG 24” Gaming Monitor... ',
      link: '/comparisons?p_a=B0773ZY26F&p_b=B07TNM8L6S',
      thumbnail: '/screenshot_0.png'
    },
    {
      title: 'Best Choice Products Folding Futon... vs Novogratz Brittany Futon...',
      link: '/comparisons?p_a=B07Y4QCDXC&p_b=B08G3BP7VL',
      thumbnail: '/screenshot_1.png'
    },
    {
      title: 'Nikon D7500 Dx-Format... vs Sony Alpha ZV-E10...',
      link: '/comparisons?p_a=B06Y5ZCFHX&p_b=B09BBKVMCD',
      thumbnail: '/screenshot_2.png'
    },
    {
      title: 'HP Stream 14-inch Laptop... vs Lenovo IdeaPad 1 14...',
      link: '/comparisons?p_a=B084SKWC89&p_b=B08YKHYCPW',
      thumbnail: '/screenshot_3.png'
    },
    {
      title: 'Captiva Designs Heavy Duty... vs KingChii 456 Sq.In Pellet Grill...',
      link: '/comparisons?p_a=B0B4VZX7D3&p_b=B0CKTH64KL',
      thumbnail: '/screenshot_4.png'
    },
    {
      title: 'ZINUS 12 Inch Cloud... vs Vibe Gel Memory Foam 12-Inch...',
      link: '/comparisons?p_a=B012H0K93I&p_b=B074ND75P9',
      thumbnail: '/screenshot_5.png'
    },
    {
      title: 'Adjustable Head Strap for Oculus... vs Newenmo Adjustable Head Strap...',
      link: '/comparisons?p_a=B098XDT9RM&p_b=B09L19QCKQ',
      thumbnail: '/screenshot_6.png'
    },
    {
      title: 'Arzopa 15.6" Portable Monitor... vs Hongo 16.1" Portable Monitor...',
      link: '/comparisons?p_a=B0B2PN9215&p_b=B0CX8VVS5C',
      thumbnail: '/screenshot_7.png'
    },
    {
      title: 'HP Chromebook 14-inch... vs Acer Chromebook Spin 311...',
      link: '/comparisons?p_a=B08529LPLZ&p_b=B086MBQKH2',
      thumbnail: '/screenshot_8.png'
    },
    {
      title: 'Home Security Camera... vs blurams Security Camera 2k...',
      link: '/comparisons?p_a=B07QKWPT8J&p_b=B07YB8HZ8T',
      thumbnail: '/screenshot_9.png'
    },
    {
      title: 'Portable Charcoal Grill... vs Naturehike Charcoal Grill...',
      link: '/comparisons?p_a=B0CNKSY1SS&p_b=B0CT2WXZR1',
      thumbnail: '/screenshot_10.png'
    },
    {
      title: 'Lilola Home Linen Sleeper... vs HONBDAY Velvet Convertible...',
      link: '/comparisons?p_a=B07NXT3C4P&p_b=B0C4KM2R6D',
      thumbnail: '/screenshot_11.png'
    },
    {
      title: 'Sleep Innovations Marley 10 inch... vs Flash Furniture Capri...',
      link: '/comparisons?p_a=B00H2RS7J0&p_b=B079ZPZSLZ',
      thumbnail: '/screenshot_12.png'
    },
    {
      title: 'EZVIZ Security Camera... vs WYZE Cam v3 with Color...',
      link: '/comparisons?p_a=B07W8YZD78&p_b=B08R59YH7W',
      thumbnail: '/screenshot_13.png'
    },
    {
      title: 'Fujifilm Instax Mini 9... vs Fujifilm Instax Mini 11...',
      link: '/comparisons?p_a=B06WWL4JD8&p_b=B085286JCJ',
      thumbnail: '/screenshot_14.png'
    }
  ]
const items_ex = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <Loader2 className="h-4 w-4 text-neutral-500" />,
  },
];
