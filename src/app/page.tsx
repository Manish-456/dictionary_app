import Meanings from '@/components/meanings';

interface HomeProps {
  searchParams : {
    word : string
  }
}
export default function Home({searchParams} : HomeProps
) {
 
  return (
    <main className='mt-8 px-4'>
  {
    searchParams?.word && <Meanings word={searchParams?.word} />
  }
    </main>
  )
}
