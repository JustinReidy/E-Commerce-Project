import { StarIcon } from "@heroicons/react/20/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ItemDetails(props) {
    const {item} = props

    return (
        <div className="pt-6 pb-16 sm:pb-24">
            <div className="lg: grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-medium text-gray-100">{item.name}</h1>
                        <p className="text-xl font-medium text-gray-100">${item.price}</p>
                    </div>
                    {/* Reviews */}
                    <div>
                        <h2 className="sr-only">Reviews</h2>
                        <div className="flex items-center">
                            <p className="text-sm text-gray-300">
                                4.8
                                <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="ml-1 flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        aria-hidden="true"
                                        className={classNames(4.8 > rating ? 'text-yellow-400' : 'text-gray-200', 'size-5 shrink-0',)}
                                        />
                                ))}
                            </div>
                            <div aria-hidden="true" className="ml-4 text-sm text-gray-300">·</div>
                            <div className="ml-4 flex">
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See all 437 reviews</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image gallery */}
                <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                        <img 
                            key={item._id}
                            alt={item.imageAlt}
                            src={item.imageUrl}
                            className="lg:col-span-2 lg:row-span-2"
                            />
                    </div>
                </div>

                <div className="mt-8 lg:col-span-5">
                    <form>
                        {/* Color Picker */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-100">Color</h2>

                            <fieldset aria-label="Choose a color" className="mt-2">
                                <div className="flex">
                                    {item.colors.map((color) => (
                                        <div key={color} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                            <input 
                                                defaultValue={color}
                                                name="color"
                                                type="radio"
                                                arial-label={color}
                                                className="bg-pink-300 size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        {/* Size Picker */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-gray-100">Size</h2>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See sizing chart</a>
                            </div>
                            <fieldset aria-label="Choose a size" className="mt-2">
                                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {item.sizes.map((size) => (
                                            <label key={size} aria-label={size} className="group relative flex items-center justify-center rounded-md border border-gray-300  p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25">
                                                <input type="radio" defaultValue={size} defaultChecked = {size} name="size"  className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed" />
                                                <span className="text-sm font-medium text-gray-100 uppercase group-has-checked:text-white">{size.toUpperCase()}</span>
                                            </label>
                                        ))}
                                    </div>
                            </fieldset>
                        </div>

                        <button type="submit" className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                            Add to Cart
                        </button>
                    </form>

                    {/* Product Details */}
                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-100">Description</h2>
                        <div dangerouslySetInnerHTML={{__html: item.description}} className="mt-4 space-y-4 text-sm/6 text-gray-500" />
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h2 className="text-sm font-medium text-gray-100">Fabric &amp; Care</h2>

                        {/* <div className="mt-4">
                            <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                                {product.details.map((item) => (
                                <li key={item} className="pl-2">
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>

                    {/* Policies */}
                    <section aria-labelledby="policies-heading" className="mt-10">
                        <h2 id="policies-heading" className="sr-only">Our Policies</h2>

                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            {/* {policies.map((policy) => (
                                <div key={policy.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                <dt>
                                    <policy.icon aria-hidden="true" className="mx-auto size-6 shrink-0 text-gray-400" />
                                    <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                </div>
                            ))} */}
                        </dl>
                    </section>
                </div>
            </div>
        </div>
    )
}