import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  [x: string]: any;
  _id: string;
  _createdAt: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  category?: {
    _id: string;
    title: string;
  };
  imageUrl?: string;
  price: number;
  quantity?: number;
  tags?: string[];
  description: string;
  features?: string;
  dimensions?: string;
}

export default async function Product(): Promise<JSX.Element> {
  // Fetching products from Sanity
  const data: IProduct[] = await client.fetch(
    `*[_type == "product"]{
      _id,
      _type,
      name,
      slug,
      "slugUrl": slug.current,
      category->{_id, title},
      image{
        asset->{_id, url}
      },
      price,
      quantity,
      tags,
      description
    }`
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <div
          key={product._id}
          className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`/products/${product.slug.current}`}>
            <div>
              {product.image?.asset?.url ? (
                <Image
                  className="rounded-t-lg p-4 ml-10 md:m-0"
                  src={product.image.asset.url}
                  alt={product.name}
                  width={300}
                  height={300}
                />
              ) : (
                <div className="h-64 rounded-t-lg bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">No Image Available</p>
                </div>
              )}
            </div>
          </Link>
          <div className="p-5">
            <Link href={`/product/${product.slug.current}`}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
