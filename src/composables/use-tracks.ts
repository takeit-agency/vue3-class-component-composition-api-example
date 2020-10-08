import { reactive, computed } from 'vue';
import { Track } from '@/ts/track';
import { loadTracks } from '@/utils/api';

interface State {
  list: Track[];
}

export function useTracks() {
  const state: State = reactive({
    list: [],
    listLength: computed(() => state.list.length),
  });

  async function get() {
    state.list = await loadTracks();
  }

  return {
    state,
    get,
  };
}
