import { client } from "@/app/lib/sanity"
import Link from 'next/link'

const getData = async () => {
    const query =  `*[_type == 'product' && references(*[_type == 'category' && name == 'Mobile']._id, categories)]{
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[] ->{
      name
    }
}` 
    const data = await client.fetch(query)
    return data;
}

const Mobili = async () => {
  const mobili = await getData();
  return (
    <section className='py-24'>
      <div className="container mx-auto">
        <h2>Negozio di antiquariato </h2>
        <p className='text-center mb-[30px'>
        Trovi tutto il meglio in un solo posto
        </p>
        <div>Carosello</div>
        <Link href='/our-fornitures'>
          <button className='btn btn-accent mx-auto'>Mostra tutti</button>
        </Link>
      </div>
    </section>
  )
}

export default Mobili