import Image from 'next/image'
import SearchBox from './components/SearchBox'
import Header from './components/Header'
import PlantCardGrid from './components/PlantCardGrid'

export default function Home() {
  return (
    <>
      <Header pageTitle="Plant Search" profileImg="/path_to_profile_image.jpg" />
      <SearchBox />
    </>
  )
}
