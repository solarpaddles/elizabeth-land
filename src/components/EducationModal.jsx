import React from 'react';
import { X, BookOpen, Heart, Zap, Coffee, Award, Code, Sparkles } from 'lucide-react';

const BookCard = ({ book }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6">
      <div className="w-full sm:w-36 h-48 overflow-hidden rounded-lg">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 space-y-4 pt-4 sm:pt-0">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
          <p className="text-sm text-gray-500">{book.author}</p>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">{book.why}</p>
        <div className="relative pl-6 border-l-2 border-blue-100 italic text-gray-500">
          <span className="absolute -left-4 -top-2 text-2xl text-blue-100">"</span>
          <p className="text-sm">{book.quote}</p>
        </div>
      </div>
    </div>
  </div>
);

const HobbyCard = ({ hobby }) => (
  <div className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-all duration-300">
    <div className="flex items-center gap-4 mb-3">
      {hobby.icon}
      <h3 className="text-lg font-medium text-gray-900">{hobby.name}</h3>
    </div>
    <p className="text-gray-600 text-sm sm:text-base">{hobby.description}</p>
  </div>
);

const ArtCard = ({ image, prompt }) => (
  <div className="group relative h-48 sm:h-auto rounded-xl overflow-hidden">
    <img
      src={image}
      alt="AI Generated Art"
      className="w-full h-full object-cover rounded-xl"
    />
    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 sm:transition-opacity sm:duration-300 touch-device:opacity-100">
      <p className="text-white text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
        Prompt: {prompt}
      </p>
    </div>
  </div>
);

const EducationModal = ({ onClose }) => {
  const books = [
    {
      title: "Physics of the Future",
      author: "Michio Kaku",
      image: '/books/michio.jpg',
      why: "Explores how science will revolutionize daily life by 2100. His predictions about AI, space travel, and biotechnology align perfectly with my interests in technology and innovation.",
      quote: "The future is not something that happens, it is something we create."
    },
    {
      title: "Ready Player One",
      author: "Ernest Cline",
      image: '/books/player.jpg',
      why: "A perfect blend of gaming culture, virtual reality, and nostalgic references that resonates with my tech interests.",
      quote: "Going outside is highly overrated."
    },
    {
      title: "Harry Potter Series",
      author: "J.K. Rowling",
      image: '/books/potter.jpg',
      why: "These books shaped my childhood and taught me about friendship, courage, and the power of imagination.",
      quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light."
    }
  ];

  const hobbies = [
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      name: "Beach Tennis",
      description: "Found my passion in beach tennis, combining sport, sun, and community. Now I'm helping shape the future of the sport."
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      name: "Anything Tech + AI",
      description: "Love diving into new technologies, especially around AI. I love working with tools like Midjourney, exploring new platforms to connect like Discord."
    },
    {
      icon: <Coffee className="w-6 h-6 text-amber-500" />,
      name: "Mushroom Coffee 🍄‍🟫",
      description: "Always on the hunt for the perfect cup of mushroom coffee, exploring local cafes and perfecting my home brewing techniques for that perfect cup. And oh, the mug matters."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      name: "Gaming",
      description: "From RPGs to VRs, gaming has always been a way to explore new worlds and stay connected with friends. Team building + leadership skills are heavily developed in squads."
    }
  ];

  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 sm:inset-4 bg-gray-50 rounded-none sm:rounded-2xl shadow-2xl 
                    overflow-hidden touch-auto">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 
                      px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-400">Beyond Work</div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center 
                     hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="h-[calc(100%-4rem)] overflow-y-auto overscroll-contain 
                      px-4 sm:px-8 py-6 sm:py-10 -webkit-overflow-scrolling-touch">
        <div className="max-w-4xl mx-auto">
          {/* Reading Section */}
          <section className="mb-16">
            <header className="mb-10 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                  What I'm Reading
                </h1>
                <p className="text-gray-600 mt-1">
                  Books that inspire, challenge, and entertain me
                </p>
              </div>
            </header>

            <div className="space-y-6">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </section>

          {/* Hobbies Section */}
          <section>
            <header className="mb-10 flex items-center gap-3">
              <Heart className="w-8 h-8 text-rose-500" />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                  Get to Know Me
                </h1>
                <p className="text-gray-600 mt-1">
                  What keeps me busy when I'm not coding
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <HobbyCard key={index} hobby={hobby} />
              ))}
            </div>
          </section>
          {/* AI Art Gallery Section */}
          <section className="mt-16">
            <header className="mb-10 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                  My AI Art
                </h1>
                <p className="text-gray-600 mt-1">
                  Experiments in creativity with AI
                </p>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-4">
              {/* Large Image */}
              <div className="col-span-8 group relative">
                <img
                  src="/art/metaland.jpg"
                  alt="AI Art 1"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    Prompt: "background illustration inspired by street fighter video game pickleball court scene, sunny and bright and grassy --v 6.1 --3:2
                  </p>
                </div>
              </div>

              {/* Medium Image */}
              <div className="col-span-4 group relative">
                <img
                  src="/art/ghost.jpg"
                  alt="AI Art 2"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    Prompt: "a full body character space girl on mars playing golf, mars space background, fine intricate details, photorealistic, unreal engine 5, octane render, 8k, smooth blender --v 6.1 --v 3:4"
                  </p>
                </div>
              </div>

              {/* Small Images */}
              <div className="col-span-4 group relative">
                <img
                  src="/art/star.jpg"
                  alt="AI Art 4"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    Prompt: "character looking triumphant with an icy world in her background and a spaceship --v 6 (using character reference)"
                  </p>
                </div>
              </div>

              <div className="col-span-8 group relative">
                <img
                  src="/art/people.jpg"
                  alt="AI Art 4"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">
                    image of group of models wearing nice clothing for a SoCal business casual lifestyle ecomm brand, high definition photography, high resolution. cinematic photographic, 35 mm photography -- v 6.1 --ar 3:2"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;