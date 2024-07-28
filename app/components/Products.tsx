import React, { FC, useMemo, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs, Virtual } from 'swiper/modules';
import Image from 'next/image';
import { ProductCategory, PRODUCTS_CONTENT, SubCategoryKeyMap } from '@/app/content/products';
import { capitalize, uniq } from 'lodash';
import { Tabs } from '@/app/components/Tabs';
import clsx from 'clsx';

export const ProductGroup: FC<{
  products: typeof PRODUCTS_CONTENT;
  selectedProduct: (typeof PRODUCTS_CONTENT)[number];
  onChange: (variant: (typeof PRODUCTS_CONTENT)[number]['variant']) => void;
}> = ({ products, selectedProduct, onChange }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const groupVariables = useMemo(() => {
    const group = {
      colors: [] as { name: string; hexRep: string[] }[],
      sizes: [] as string[],
      editions: [] as string[],
    };
    for (const { variant } of products) {
      if (variant.color != undefined && !group.colors.find(({ name }) => name === variant.color)) {
        if (variant.size == selectedProduct.variant.size && variant.edition == selectedProduct.variant.edition) {
          group.colors.push({ name: variant.color, hexRep: variant.colorRepHexGradient ?? [] });
        }
      }
      if (variant.size != undefined && !group.sizes.includes(variant.size)) {
        if (variant.color == selectedProduct.variant.color && variant.edition == selectedProduct.variant.edition) {
          group.sizes.push(variant.size);
        }
      }

      if (
        variant.edition != undefined &&
        !group.editions.includes(variant.edition) &&
        !SubCategoryKeyMap[selectedProduct.category].includes('edition')
      ) {
        if (variant.color == selectedProduct.variant.color && variant.size == selectedProduct.variant.size) {
          group.editions.push(variant.edition);
        }
      }
    }
    return group;
  }, [products, selectedProduct]);

  const { title, price, description, images } = selectedProduct;

  return (
    <div className={'flex flex-col gap-y-10 md:flex-row md:gap-x-10'}>
      <div className={'w-full md:w-[45%] lg:w-[30%]'}>
        <Swiper
          style={{
            // @ts-ignore
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          }}
          loop={true}
          speed={600}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Autoplay, Virtual]}
          className={'hero-swiper upper'}
        >
          {images.map((image, i) => (
            <SwiperSlide className={'relative'} key={i} virtualIndex={i}>
              <div className={'absolute inset-0 bg-black/60 -z-10'} />
              <div className={'h-[350px]'}>
                <Image alt={title} src={image} fill={true} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper as (swiper: any) => void}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Virtual]}
          className={'hero-swiper lower !h-[100px] md:h-[20%]'}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i} virtualIndex={i} className={'cursor-pointer'}>
              <Image alt={title} src={image} fill={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={'w-full'}>
        <h3 className={'mb-6'}>{title}</h3>
        {/*<h4 className={'mb-8'}>Rs. {price}</h4>*/}
        <h4 className={'mb-8 text-lg font-semibold'}>{description}</h4>

        <div
          className={clsx('space-y-4', {
            hidden:
              groupVariables.colors.length == 0 &&
              groupVariables.sizes.length == 0 &&
              groupVariables.editions.length === 0,
          })}
        >
          {groupVariables.colors.length > 0 && (
            <div className={'flex items-center space-x-3'}>
              <p>Colors:</p>
              <div className={'flex flex-wrap items-center gap-3'}>
                {groupVariables.colors.map(({ name, hexRep }) => (
                  <button
                    key={name}
                    className={clsx('flex items-center space-x-2 p-1.5', {
                      'border border-black/40 rounded-lg': name === selectedProduct.variant.color,
                    })}
                    onClick={() => onChange({ ...selectedProduct.variant, color: name, colorRepHexGradient: hexRep })}
                  >
                    <div
                      key={name}
                      className={`w-6 h-6 border border-black`}
                      style={
                        hexRep.length === 1
                          ? { background: hexRep[0] }
                          : { backgroundImage: `linear-gradient(45deg, ${hexRep.join(', ')})` }
                      }
                    />
                    <p className={'text-sm'}>{name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {groupVariables.sizes.length > 0 && (
            <div className={'flex items-center space-x-3'}>
              <p>Sizes:</p>
              <div className={'flex flex-wrap items-center gap-3'}>
                {groupVariables.sizes.map((size) => (
                  <button
                    key={size}
                    className={clsx('p-1.5', {
                      'border border-black/40 rounded-lg': size === selectedProduct.variant.size,
                    })}
                    onClick={() => onChange({ ...selectedProduct.variant, size })}
                  >
                    <p className={'text-sm'}>{size}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {groupVariables.editions.length > 0 && (
            <div className={'flex items-center space-x-3'}>
              <p>Editions:</p>
              <div className={'flex flex-wrap items-center gap-3'}>
                {groupVariables.editions.map((edition) => (
                  <button
                    key={edition}
                    className={clsx('p-1.5', {
                      'border border-black/40 rounded-lg': edition === selectedProduct.variant.edition,
                    })}
                    onClick={() => onChange({ ...selectedProduct.variant, edition })}
                  >
                    <p className={'text-sm'}>{edition}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Products = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<{ [category: string]: string }>({});
  const [selectedProduct, setSelectedProduct] = useState<{ [subCategory: string]: (typeof PRODUCTS_CONTENT)[number] }>(
    {},
  );

  const categories = [
    ProductCategory.KITS,
    ProductCategory.GLOVES,
    ProductCategory.BATS,
    ProductCategory.PADS,
    ProductCategory.BALLS,
  ];

  const findProductByVariant = (category: string, variant: (typeof PRODUCTS_CONTENT)[number]['variant']) => {
    const product = PRODUCTS_CONTENT.find(
      ({ category: pc, variant: pv }) =>
        pc === category &&
        pv.type == variant.type &&
        pv.color === variant.color &&
        pv.size === variant.size &&
        variant.edition == pv.edition,
    );
    return (
      product || (PRODUCTS_CONTENT.find(({ category: pc }) => pc === category) as (typeof PRODUCTS_CONTENT)[number])
    );
  };

  const getSubCategoryForProduct = (product: (typeof PRODUCTS_CONTENT)[number]) => {
    const subCategoryVariantKeys = SubCategoryKeyMap[product.category];
    return capitalize(
      subCategoryVariantKeys.map((key) => product.variant[key as keyof typeof product.variant] as string).join(' '),
    );
  };

  return (
    <div className={'space-y-14'}>
      {categories.map((category) => {
        const productsForCategory = PRODUCTS_CONTENT.filter(({ category: pc }) => pc === category);
        const subCategories = uniq(productsForCategory.map(getSubCategoryForProduct));
        const currSelectedSubCategory = selectedSubCategory[category] || subCategories[0];
        const productsForSubCategory = productsForCategory.filter(
          (product) => getSubCategoryForProduct(product) === currSelectedSubCategory,
        );
        const selectedProductForSubCategory = selectedProduct[currSelectedSubCategory] || productsForSubCategory[0];

        return (
          <div key={category} className={'space-y-4'}>
            <h2 className={'mb-10'}>{category}</h2>
            <Tabs
              options={subCategories.map((subCategory) => ({ label: subCategory, value: subCategory }))}
              value={currSelectedSubCategory}
              onChange={(value) => setSelectedSubCategory({ ...selectedSubCategory, [category]: value })}
            />
            <ProductGroup
              products={productsForSubCategory}
              selectedProduct={selectedProductForSubCategory}
              onChange={(variant) => {
                setSelectedProduct({
                  ...selectedProduct,
                  [currSelectedSubCategory]: findProductByVariant(category, variant),
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
