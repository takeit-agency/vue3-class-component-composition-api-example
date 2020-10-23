<template>
  <div class="app">
    <div class="tracks">
      <h3>Tracks</h3>
      <div>
        <div
          class="track"
          v-for="(track, index) in tracks.state.list"
          :key="index"
        >
          <img :src="track.imageUrl" :alt="track.name" class="track__image" />
          <strong class="track__name">{{ track.name }}</strong>
          {{ track.artistName }}
        </div>
      </div>
    </div>

    <div class="artists">
      <h3>Artists</h3>
      <div>
        <div
          class="artist"
          v-for="(artist, index) in artists.state.list"
          :key="index"
        >
          <img
            :src="artist.imageUrl"
            :alt="artist.name"
            class="artist__image"
          />
          <strong class="artist__name">{{ artist.name }}</strong>
        </div>
      </div>
    </div>

    <footer class="footer">
      <span>Made by:</span>
      <a
        href="https://takeit.agency/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="footer__logo" src="/logo.png" alt="take it agency" />
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import { useTracks } from './composables/use-tracks';
import { useArtists } from './composables/use-artists';

@Options({})
export default class App extends Vue {
  tracks = setup(() => useTracks())

  artists = setup(() => useArtists())

  created() {
    this.tracks.get();
    this.artists.get();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.track {
  display: flex;
  align-items: center;
}

.track__image {
  width: 56px;
  margin-right: 16px;
}

.track__name {
  margin-right: 8px;
}

.artist {
  display: flex;
  align-items: center;
}

.artist__image {
  width: 56px;
  margin-right: 16px;
}

.artist__name {
  margin-right: 8px;
}

.footer {
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: center;
}

.footer__logo {
  width: 100px;
}
</style>
