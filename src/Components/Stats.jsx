import { stats } from "../helper/data"

const Stats = () => {
  return (
    <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>
        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
          laborum labore provident impedit esse recusandae facere libero harum
          sequi.
        </p>
      </div>
      <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-gray-100">
          {stats.map((item=>
             <div className="flex flex-col px-4 py-8 text-center">
             <dt className="order-last text-lg font-medium text-gray-500">
               {item.title}
             </dt>
             <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
           {item.data}
             </dd>
           </div>
            ))}
         
        </dl>
      </div>
    </div>
  </section>
  )
}

export default Stats
