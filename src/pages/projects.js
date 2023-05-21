import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../components/UniversalHead.js';

import projectsArray from '../../resources/projects.json';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>Camdan&apos;s Projects</title>
      </Head>

      <main className="w-screen min-h-screen overflow-hidden bg-gray-500 bg-topography">
        <div className="flex flex-wrap items-center justify-center m-16 sm:mt-32">
          {projectsArray.map((project) => {
            return (
              <div key={project.id} className="grid w-full mx-2 my-8 md:w-[45%] lg:w-[30%]">
                <Image id={`project-image-${project.id}`} src={`https://cdn.camdan.me/projects/${project.id}.jpg`} alt={`${project.title} Image`} className="object-cover object-center w-full transition-all duration-500 rounded-lg shadow-md" width="1920" height="1080"></Image>

                <div className="relative px-1 -mt-8 transition-all duration-500 sm:px-4 hover:scale-110" onMouseOver={() => { return document.getElementById(`project-image-${project.id}`).classList.add('scale-90'); }} onMouseOut={() => { return document.getElementById(`project-image-${project.id}`).classList.remove('scale-90'); }}>
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <p className="flex flex-wrap py-2 mb-1 text-sm text-white">
                      <span className="px-2 py-1 mb-1 mr-1 bg-yellow-500 rounded-full">{project.status}</span>
                      <span className="px-2 py-1 mb-1 mr-1 bg-red-500 rounded-full">{project.category}</span>
                      <span className="px-2 py-1 mb-1 mr-1 bg-blue-500 rounded-full">{project.role}</span>
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
          })}
        </div>
      </main >
    </>
  );
}
