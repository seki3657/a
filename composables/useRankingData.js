// useRankingData.js
import { ref } from 'vue';
import { rankingData } from '~/composables/RankingData';

export function useRankingData() {
  const title = ref(rankingData.title);
  const title2 = ref(rankingData.title2);
  const title3 = ref(rankingData.title3);
  const image1 = ref(rankingData.image1);
  const image2 = ref(rankingData.image2);
  const buttonLabel = ref(rankingData.buttonLabel);

  return {
    title,
    title2,
    title3,
    image1,
    image2,
    buttonLabel,
  };
}
