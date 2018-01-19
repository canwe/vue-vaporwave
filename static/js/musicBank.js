let musicians = [
  {
    artist: 'Eyeliner',
    path: 'closeness.mp3',
    song: 'Closeness',
    logo: 'eyeliner.jpg',
    album: 'High Fashion Mood Music',
    url: 'https://disasteradio.bandcamp.com/album/high-fashion-mood-music'
  },
  {
    artist: 'Macintosh Plus',
    path: '420.mp3',
    song: 'リサフランク420 _ 現代のコンピュー',
    logo: 'floral.jpg',
    album: 'FLORAL SHOPPE',
    url: 'https://beerontherug.bandcamp.com/album/floral-shoppe'
  },
  {
    artist: 'fuji grid tv',
    path: 'sundream.mp3',
    song: 'ssun dreamm',
    logo: 'prism.jpg',
    album: 'prism genesis',
    url: 'https://vektroid.bandcamp.com/album/fuji-grid-tv-ex'
  },
  {
    artist: 'Vaperror',
    path: 'aqua.mp3',
    song: 'Aqua Domain',
    logo: 'manapool.jpg',
    album: 'Mana Pool',
    url: 'https://vaperror.bandcamp.com/album/mana-pool'
  },
  {
    artist: 'Sacred Tapestry',
    path: 'ldvhd.mp3',
    song: 'LD . VHD',
    logo: 'shader.jpg',
    album: 'Shader',
    url: 'https://vektroid.bandcamp.com/album/shader-complete'
  },
  {
    artist: 'ESPRIT 空想',
    path: 'summer.mp3',
    song: 'summer night',
    logo: 'summernight.jpg',
    album: 'summer night',
    url: 'http://esprit.100percentelectronica.com/album/summer-night'
  },
  {
    artist: 'マクロスMACROSS 82-99',
    path: 'newdawn.mp3',
    song: 'NEW DAWN',
    logo: 'sailorwave.jpg',
    album: 'Sailorwave',
    url: 'https://neoncityrecords.bandcamp.com/album/sailorwave'
  },
  {
    artist: 'YUNG BAE',
    path: 'takemylove.mp3',
    song: 'Take My Love',
    logo: 'bae.jpg',
    album: 'Bae',
    url: 'https://yungbaebae.bandcamp.com/album/bae'
  },
  {
    artist: 'fuji grid tv',
    path: 'toyota.mp3',
    song: 'toyota / waiting for you',
    logo: 'prism.jpg',
    album: 'prism genesis',
    url: 'https://vektroid.bandcamp.com/album/fuji-grid-tv-ex'
  },
  {
    artist: 'Macintosh Plus',
    path: 'floral.mp3',
    song: '花の専門店',
    logo: 'floral.jpg',
    album: 'FLORAL SHOPPE',
    url: 'https://beerontherug.bandcamp.com/album/floral-shoppe'
  },
  {
    artist: '情報デスクVIRTUAL',
    path: 'odysseus.mp3',
    song: 'ODYSSEUSこう岩寺「OUTDOOR MALL」',
    logo: 'shophome.jpg',
    album: '札幌コンテンポラリー',
    url: 'https://beerontherug.bandcamp.com/album/-'
  },
  {
    artist: 'New Dreams Ltd.',
    path: 'fatal.mp3',
    song: 'Fatal',
    logo: 'avalon.jpg',
    album: 'Initiation Tape: Isle of Avalon',
    url: 'https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048'
  },
  {
    artist: 'M4',
    path: 'neonexit.mp3',
    song: 'Ｎｅｏｎ Ｅｘｉｔ',
    logo: 'neonexit.jpg',
    album: 'Ｎｅｏｎ Ｅｘｉｔ',
    url: 'https://m4sound.bandcamp.com/album/--10'
  },
  {
    artist: '情報デスクVIRTUAL',
    path: 'testarossa.mp3',
    song: 'T E S T A R O S S A interLude',
    logo: 'shophome.jpg',
    album: '札幌コンテンポラリー',
    url: 'https://beerontherug.bandcamp.com/album/-'
  },
  {
    artist: 'Hong Kong Express',
    path: 'lexus.mp3',
    song: 'Girl In The Lexus Showroom',
    logo: 'hke.png',
    album: '浪漫的夢想',
    url: 'https://hkedream.bandcamp.com/album/--2'
  },
  {
    artist: 'Sacred Tapestry',
    path: 'dreamy.mp3',
    song: 'ドリーミー',
    logo: 'shader.jpg',
    album: 'Shader',
    url: 'https://vektroid.bandcamp.com/album/shader-complete'
  },
  {
    artist: 'Macintosh Plus',
    path: 'geo.mp3',
    song: '地理',
    logo: 'floral.jpg',
    album: 'FLORAL SHOPPE',
    url: 'https://beerontherug.bandcamp.com/album/floral-shoppe'
  },
  {
    artist: 'Eyeliner',
    path: 'devotion.mp3',
    song: 'Devotion',
    logo: 'eyeliner.jpg',
    album: 'High Fashion Mood Music',
    url: 'https://disasteradio.bandcamp.com/album/high-fashion-mood-music'
  },
  {
    artist: 'YUNG BAE',
    path: 'willing.mp3',
    song: 'i\'m willing',
    logo: 'bae.jpg',
    album: 'Bae',
    url: 'https://yungbaebae.bandcamp.com/album/bae'
  },
  {
    artist: 'マクロスMACROSS 82-99',
    path: 'jupiter.mp3',
    song: '木野 まこと',
    logo: 'sailorwave.jpg',
    album: 'Sailorwave',
    url: 'https://neoncityrecords.bandcamp.com/album/sailorwave'
  },
  {
    artist: 'Hong Kong Express',
    path: 'yourdrink.mp3',
    song: 'Your drink, sir 鸡尾酒酒吧',
    logo: 'hke.png',
    album: '浪漫的夢想',
    url: 'https://hkedream.bandcamp.com/album/--2'
  },
  {
    artist: 'Moe Shop',
    path: 'sogood.mp3',
    song: 'You Look So Good',
    logo: 'purepure.jpg',
    album: 'Pure Pure',
    url: 'https://moeshop.bandcamp.com/album/pure-pure'
  },
  {
    artist: 'Eyeliner',
    path: 'eyeliner.mp3',
    song: 'Eyeliner',
    logo: 'eyeliner.jpg',
    album: 'High Fashion Mood Music',
    url: 'https://disasteradio.bandcamp.com/album/high-fashion-mood-music'
  },
  {
    artist: '情報デスクVIRTUAL',
    path: '7wonder.mp3',
    song: '7 WONDERS OF THE iNTERNET',
    logo: 'shophome.jpg',
    album: '札幌コンテンポラリー',
    url: 'https://beerontherug.bandcamp.com/album/-'
  },
  {
    artist: 'New Dreams Ltd.',
    path: 'slave.mp3',
    song: 'Slave',
    logo: 'avalon.jpg',
    album: 'Initiation Tape: Isle of Avalon',
    url: 'https://www.discogs.com/New-Dreams-Ltd-Initiation-Tape-Isle-Of-Avalon-Edition/master/731048'
  },
  {
    artist: 'fuji grid tv',
    path: 'cinemax.mp3',
    song: 'cinemax / speak',
    logo: 'prism.jpg',
    album: 'prism genesis',
    url: 'https://vektroid.bandcamp.com/album/fuji-grid-tv-ex'
  },
  {
    artist: 'ESPRIT 空想',
    path: 'cruiser.mp3',
    song: 'cruiser',
    logo: 'summernight.jpg',
    album: 'summer night',
    url: 'http://esprit.100percentelectronica.com/album/summer-night'
  }
]

export default musicians
