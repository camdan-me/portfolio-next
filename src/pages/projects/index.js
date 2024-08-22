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
  return `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};

export default function Home() {
  const getProjects = () => {
    return projectsArray.map((project) => {
      // render the component
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
                <span className="px-2 py-1 mb-1 mr-1 transition-all duration-200 bg-gray-500 rounded-full hover:bg-red-500">{project.status}</span>
                <span className="px-2 py-1 mb-1 mr-1 transition-all duration-200 bg-gray-500 rounded-full hover:bg-yellow-500 hover:text-gray-900">{project.type}</span>
                <span className="px-2 py-1 mb-1 mr-1 transition-all duration-200 bg-gray-500 rounded-full hover:bg-blue-500">{project.role}</span>
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
          I&apos;ve made all sorts of things, and I collect most of them here. This isn&apos;t an exhaustive list, but it&apos;s a good start!<br />
          Check me out on other social platforms to see more.
        </h2>
        <div className="flex flex-wrap items-center justify-center mx-4 text-gray-900 sm:mx-16">
          {getProjects()}
        </div>
      </main >
    </>
  );
}
