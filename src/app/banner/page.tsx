import logoArtelia from '@/images/logos/artelia.png'
import logoCIDJ from '@/images/logos/cidj.png'
import logoEU4UA from '@/images/logos/eu4ua.png'
import logoEXA from '@/images/logos/exa.png'
import logoTudigo from '@/images/logos/tudigo.jpg'
import logoViseo from '@/images/logos/viseo.jpg'
import logoSigilium from '@/images/logos/sigilium.png'
import Image from 'next/image'

export default function Banner() {
  let resume = [
    {
      company: 'VISEO',
      title: 'Ingénieur logiciel',
      logo: logoViseo,
      end: '2025',
    },
    {
      company: 'Tudigo',
      title: 'Développement front-end',
      logo: logoTudigo,
      end: '2024',
    },
    {
      company: 'Artelia',
      title: 'Développement front-end & architecture',
      logo: logoArtelia,
      end: '2023',
    },
    {
      company: 'EU4UA',
      title: 'Développement front-end',
      logo: logoEU4UA,
      end: '2022',
    },
    {
      company: 'EXA Labs',
      title: 'Développement front-end',
      logo: logoEXA,
      end: '2022',
    },
    {
      company: 'Sigilium',
      title: 'Développement front-end',
      logo: logoSigilium,
      end: '2022',
    },
    {
      company: 'CIDJ',
      title: 'Développement full-stack',
      logo: logoCIDJ,
      end: '2022',
    },
  ]

  return (
    <div className="mt-42 flex h-[349px] w-[1400px] flex-col justify-between border">
      <section className="flex">
        <div className="text-dark-sable mt-20 flex w-1/4 justify-center p-6 text-2xl"></div>

        <div className="w-3/4 flex-col p-10 pt-20">
          <h2 className="text-dark-sable text-4xl uppercase">
            Je vous aide à respecter vos délais et améliorer le confort de vos devs 🧘
          </h2>
          <h2 className="text-dark-sable mt-6 text-2xl uppercase">
            d&eacute;veloppement frontend React freelance
          </h2>
        </div>
      </section>

      <section className="flex h-22 w-full items-center justify-end gap-10 bg-white/30 p-2 px-4">
        <p>Ils m'ont fait confiance</p>
        <div className="flex gap-10 pr-10">
          {resume.map((img) => (
            <Image
              src={img.logo}
              alt=""
              className="h-10 w-10 rounded mix-blend-multiply"
              unoptimized
            />
          ))}
        </div>
      </section>
    </div>
  )
}
