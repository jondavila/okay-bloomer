'use client';

import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import PlantFaq from './components/PlantFaq';

import React, { useState, useEffect } from 'react';

export default function Home() {
  return (
    <>
      <Header pageTitle="Plant Sanctuary" profileImg="/path_to_profile_image.jpg" />
      <PlantFaq />
    </>
  );
}
