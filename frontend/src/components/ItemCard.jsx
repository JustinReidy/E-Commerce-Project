export default function ItemCard(props) {
const {id, imageAlt, imageSrc, href, name, color, price} = props
    return (
        <div key={id} className="group relative">
            <img alt={imageAlt} src={imageSrc} className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-100">
                        <a href={href}>
                            <span aria-hidden="true" className="inset-0">{name}</span>
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">{color}</p>
                </div>
                <p className="text-sm font-medium text-white">${price}</p>
            </div>
        </div>
)
}