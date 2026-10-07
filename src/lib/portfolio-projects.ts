import rfBull from '@/assets/rf-bull-project.png.asset.json';
import wiki from '@/assets/wiki-project.png.asset.json';
import youtube from '@/assets/youtube-project.png.asset.json';
const github = 'https://github.com/paulovitormarques771-arch';
export const projects = [
 { name: 'RF-Bull Energético', category: 'LANDING PAGE', description: 'Uma experiência visual para uma marca de energéticos, com apresentação de sabores e identidade marcante.', technologies: ['React', 'TypeScript', 'Tailwind CSS'], image: rfBull.url, github: `${github}/Landing-page-RF-Bull-Energetico`, demo: 'https://rf-bull-sparkle.lovable.app' },
 { name: 'Wiki • Supernatural', category: 'DESENVOLVIMENTO WEB', description: 'Uma página dedicada ao universo de Supernatural, explorando a organização de conteúdo e a estrutura da web.', technologies: ['HTML', 'CSS'], image: wiki.url, github: `${github}/PROJETO-WIKI`, demo: null },
 { name: 'YouTube Clone', category: 'INTERFACE WEB', description: 'Recriação de uma interface de vídeo, desenvolvida para praticar HTML, CSS e composição de layouts.', technologies: ['HTML', 'CSS'], image: youtube.url, github: `${github}/DIO-YouTube-clone`, demo: null },
];
