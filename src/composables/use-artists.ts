import { reactive, computed } from 'vue';
import { loadArtists } from '@/utils/api';
import { Artist } from '@/ts/artist';

interface State {
  list: Artist[];
}

export function useArtists() {
  const state: State = reactive({
    list: [],
    listLength: computed(() => state.list.length),
  });

  async function get() {
    state.list = await loadArtists();
  }

  return {
    state,
    get,
  };
}
