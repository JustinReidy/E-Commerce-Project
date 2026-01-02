export default function Header(props) {
    const {title, flavor, description} = props
  return (
    <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-indigo-400">{flavor}</p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-7xl">{title}</h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          {description}
        </p>
      </div>
    </div>
  )
}
