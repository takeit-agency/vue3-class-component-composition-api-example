import { Artist } from '@/ts/artist';
import { Track } from '@/ts/track';

const mockArtist: Artist[] = [
  {
    name: 'The Rolling Stones',
    imageUrl: 'https://i.scdn.co/image/85d9cb252ab4d8410d31820be40214c59f2597a1',
  },
  {
    name: 'The Beatles',
    imageUrl: 'https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7',
  },
  {
    name: 'Steely Dan',
    imageUrl: 'https://i.scdn.co/image/9d01e4e9aac39b891d684d3d1a5b3a451d7c72bd',
  },
];

const mocktracks: Track[] = [
  {
    name: 'Midnight Blue',
    artistName: 'Kenny Burrell',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273337b64d3c252d562a33e4d35',
  },
  {
    name: 'Gimme Shelter',
    artistName: 'The Rolling Stones',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99',
  },
  {
    name: 'Teen Town',
    artistName: 'Weather Report',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273dc676a8b0a1ad6284b6996f9',
  },
];

export function loadArtists(): Promise<Artist[]> {
  return new Promise((resolve) => resolve(mockArtist));
}

export function loadTracks(): Promise<Track[]> {
  return new Promise((resolve) => resolve(mocktracks));
}
