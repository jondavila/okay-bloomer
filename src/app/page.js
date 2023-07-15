'use client';

import Image from 'next/image'
import SearchBar from './components/SearchBar'
import Header from './components/Header'


export default function Home() {
  return (
    <>
      <Header pageTitle="Plant Search" profileImg="/path_to_profile_image.jpg" />
      <SearchBar />
    </>
  )
}
