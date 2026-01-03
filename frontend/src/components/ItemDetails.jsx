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
                    </form>
                </div>
            </div>
        </div>
    )
}