import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../../components/UniversalHead.js';

import projectsArray from '../../../resources/projects.json';

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) => {
  return keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);
};

const rgbDataURL = (r, g, b) => {
  return `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};

export default function Home() {
  const [category, setCategory] = useState('filmmaking'); // current category of projects being displayed

  const getProjects = () => {
    return projectsArray.map((project) => {
      // if the project is not in the current category, don't display it
      if (category !== project.category) return;

      // if the project is in the current category, render the component
      return (
        <div key={project.id} className="grid w-full mx-4 my-8 md:w-[45%] lg:w-[30%]">
          <Image
            id={`project-image-${project.id}`}
            src={`https://cdn.camdan.me/projects/${project.category}/${project.id}.jpg`}
            alt={`${project.title} Image`}
            onClick={() => { return window.open(`/projects/${project.id}`, '_blank'); }}
            className="object-cover object-center w-full transition-all duration-500 rounded-lg shadow-md cursor-pointer hover:scale-90"
            onMouseOver={() => { return document.getElementById(`project-card-${project.id}`).classList.add('scale-110'); }}
            onMouseOut={() => { return document.getElementById(`project-card-${project.id}`).classList.remove('scale-110'); }}
            width="720"
            height="480"
            placeholder="blur"
            blurDataURL={rgbDataURL(project.color[0], project.color[1], project.color[2])}
          >
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

              <button onClick={() => { return window.open(`/projects/${project.id}`, '_blank'); }} className="w-full h-12 px-6 text-white transition-all duration-150 bg-gray-600 rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100" disabled={!project.link}>
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
        <UniversalHead description="I've made a wide variety of projects across different diciplines and areas of the internet. Here is where I collect most of them!" />

        <title>Camdan&apos;s Projects</title>
      </Head>

      <main className="w-screen min-h-screen">
        <h1 className="mt-24 text-3xl font-black text-center text-white md:mx-24 md:text-left md:text-5xl md:mt-32">My Projects</h1>
        <h2 className="mx-8 mt-2 text-xl font-bold text-center text-white md:text-left md:mx-24">
          I&apos;ve made all sorts of things, and I collect most of them here. This isn&apos;t an exhaustive list, but it&apos;s a good start.<br />
          Explore all the categories to see everything I&apos;ve made!
        </h2>
        <div className="flex items-center justify-center mx-4 mt-4 text-center md:mx-24 md:justify-start">
          <div className="px-4 py-2 bg-white rounded-lg">
            <h3 className="mr-1 text-2xl font-bold text-gray-900 md:hidden">Categories</h3>
            <span className="hidden mr-1 text-2xl font-bold text-gray-900 md:inline">Categories:</span>
            <button onClick={() => { setCategory('filmmaking'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 ${category === 'filmmaking' ? 'bg-red-500 cursor-default' : 'bg-gray-500 hover:ring-4 ring-red-500 ring-inset'}`}>Filmmaking</button>
            <button onClick={() => { setCategory('programming'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 ${category === 'programming' ? 'bg-yellow-500 cursor-default' : 'bg-gray-500 hover:ring-4 ring-yellow-500 ring-inset'}`}>Programming</button>
            <button onClick={() => { setCategory('other'); }} className={`px-4 py-2 m-1 text-white transition-all rounded-full duration-250 ${category === 'other' ? 'bg-blue-500 cursor-default' : 'bg-gray-500 hover:ring-4 ring-blue-500 ring-inset'}`}>Live Events/Music</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-4 text-gray-900 sm:mx-16">
          {getProjects()}
        </div>
      </main >
    </>
  );
}
