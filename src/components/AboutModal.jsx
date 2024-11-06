import React from 'react';
import { X, Music, Heart } from 'lucide-react';

const AboutModal = ({ onClose }) => {
  // Preferences scale data
  const preferences = [
    { left: "Pokémon", right: "Digimon", value: 80 }, // 80% towards Pokemon
    { left: "Pickleball", right: "Tennis", value: 70 }, // 70% towards Pickleball
    { left: "Mountains", right: "Beach", value: 40 }, // 40% towards Mountains (so 60% Beach)
    { left: "Coffee", right: "Tea", value: 60 }, // 90% towards Coffee
    { left: "Dogs", right: "Cats", value: 80 }, // Equal love
  ];

  // Playlist data
  const playlist = [
    {
      title: "Running Up That Hill",
      artist: "Kate Bush",
      url: "https://open.spotify.com/track/29d0nY7TzCoi22XBqDQkiP",
      color: "bg-pink-500"
    },
    {
      title: "Dreams",
      artist: "Fleetwood Mac",
      url: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",
      color: "bg-purple-500"
    },
    {
      title: "Don't Stop Believin'",
      artist: "Journey",
      url: "https://open.spotify.com/track/4bHsxqR3GMrXTxEPLuK5ue",
      color: "bg-blue-500"
    },
    {
      title: "Sweet Dreams",
      artist: "Eurythmics",
      url: "https://open.spotify.com/track/1TfqLAPs4K3s2rJMoCokcS",
      color: "bg-green-500"
    },
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
    <div className="fixed inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Modal header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-400">About Me</div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="h-[calc(100%-4rem)] overflow-y-auto">
        {/* Banner */}
        <div className="relative h-64 w-full">
          <img
            src="/liz_banner.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-16 left-8">
            <img
              src="/liz.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 pt-20 pb-10">
          {/* Bio Section */}
          <section className="mb-16">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Elizabeth Brown
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Marketing Manager & Digital Product Developer based in Hermosa Beach, passionate about building digital experiences and playing paddle sports.
            </p>
            <p className="text-gray-600">
              When I'm not crafting marketing strategies or developing products, you'll find me on the beach playing paddle tennis, working on my serve, or exploring new coffee shops around LA.
            </p>
          </section>

          {/* Media Gallery */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
              <div className="col-span-2 row-span-2">
                <img
                  src="liz_media_01.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover rounded-xl hover:opacity-90 transition-opacity"
                />
              </div>
              <div>
                <img
                  src="liz_media_01.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover rounded-xl hover:opacity-90 transition-opacity"
                />
              </div>
              <div>
                <img
                  src="liz_media_01.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover rounded-xl hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Preferences
            </h2>
            <div className="space-y-6">
              {preferences.map((pref, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{pref.left}</span>
                    <span>{pref.right}</span>
                  </div>
                  <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-300 group-hover:opacity-80"
                      style={{ width: `${pref.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Playlist Section */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
              <Music className="w-4 h-4" />
              Current Playlist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playlist.map((song, index) => (
                <a
                  key={index}
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-12 h-12 ${song.color} rounded-lg flex items-center justify-center`}>
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-500 transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-sm text-gray-500">{song.artist}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;