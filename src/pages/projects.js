import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../components/UniversalHead.js';

import projectsArray from '../../resources/projects.json';

export default function Home() {
  const [activeColors, setActiveColors] = useState(['red', 'yellow', 'blue']);

  const toggle = (color) => {
    if (activeColors.includes(color)) return setActiveColors(activeColors.filter((activeColor) => { return activeColor !== color; }));
    else return setActiveColors([...activeColors, color]);
  };

  const getProjects = (colors) => {
    if (colors.length === 0) {
      return (
        <h2 className="my-4 mt-16 text-3xl font-black text-center text-white sm:text-5xl">Whoops! Nothing to see here... Try a different filter?</h2>
      );
    }

    return projectsArray.map((project) => {
      if (!colors.includes(project.color)) return;

      return (
        <div key={project.id} className="grid w-full mx-4 my-8 md:w-[45%] lg:w-[30%]">
          <Image
            id={`project-image-${project.id}`}
            src={`https://cdn.camdan.me/projects/${project.id}.jpg`}
            alt={`${project.title} Image`}
            onClick={() => { return window.open(project.link, '_blank'); }}
            className={`object-cover object-center w-full transition-all duration-500 rounded-lg shadow-md cursor-pointer ring-8 ring-${project.color}-500 hover:scale-90`}
            onMouseOver={() => { return document.getElementById(`project-card-${project.id}`).classList.add('scale-110'); }}
            onMouseOut={() => { return document.getElementById(`project-card-${project.id}`).classList.remove('scale-110'); }}
            width="1920"
            height="1080">
          </Image>

          <div
            id={`project-card-${project.id}`}
            className="relative px-1 -mt-8 transition-all duration-500 sm:px-4 hover:scale-110"
            onMouseOver={() => { return document.getElementById(`project-image-${project.id}`).classList.add('scale-90'); }}
            onMouseOut={() => { return document.getElementById(`project-image-${project.id}`).classList.remove('scale-90'); }}>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="flex flex-wrap py-2 mb-1 text-sm text-white">
                <span className="px-2 py-1 mb-1 mr-1 bg-gray-500 rounded-full">{project.status}</span>
                <span className="px-2 py-1 mb-1 mr-1 bg-gray-500 rounded-full">{project.type}</span>
                <span className="px-2 py-1 mb-1 mr-1 bg-gray-500 rounded-full">{project.role}</span>
              </p>
              <h4 className="text-xl font-bold">{project.title}</h4>

              <div className="mt-2 mb-6">
                {project.description}
              </div>

              <button onClick={() => { return window.open(project.link, '_blank'); }} className="w-full h-12 px-6 text-white transition-all duration-150 bg-gray-600 rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100" disabled={!project.link}>
                {project.cta}
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>Camdan&apos;s Projects</title>
      </Head>

      <main className="w-screen min-h-screen bg-gray-500">
        <h1 className="mt-24 text-3xl font-black text-center text-white md:mx-24 md:text-left md:text-5xl md:mt-32">My Projects</h1>
        <h2 className="mx-8 mt-2 text-xl font-bold text-center text-white md:text-left md:mx-24">
          I&apos;ve made all sorts of things, and I collect most of them here. This isn&apos;t an exhaustive list, but it&apos;s a good start.
        </h2>
        <div className="flex items-center justify-center mx-4 mt-4 text-center md:mx-24 md:justify-start">
          <div className="px-4 py-2 bg-white rounded-lg">
            <h4 className="mr-1 text-2xl font-bold text-gray-900 md:hidden">Categories</h4>
            <span className="hidden mr-1 text-2xl font-bold text-gray-900 md:inline">Categories:</span>
            <button onClick={() => { toggle('red'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 hover:ring-4 ring-red-500 ${activeColors.includes('red') ? 'bg-red-500' : 'bg-gray-500'}`}>Filmmaking</button>
            <button onClick={() => { toggle('yellow'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 hover:ring-4 ring-yellow-500 ${activeColors.includes('yellow') ? 'bg-yellow-500' : 'bg-gray-500'}`}>Programming</button>
            <button onClick={() => { toggle('blue'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 hover:ring-4 ring-blue-500 ${activeColors.includes('blue') ? 'bg-blue-500' : 'bg-gray-500'}`}>Live Events/Music</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center m-16 mt-0 text-gray-900">
          {getProjects(activeColors)}
        </div>
      </main >
    </>
  );
}
