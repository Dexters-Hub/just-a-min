import { ref } from 'vue';
import { topics } from '@/constants/topic';

const getRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    const randomTopic = topics[randomIndex];
    return randomTopic;
};

export const useTopic = () => {
    const topicSubtitle = ref(getRandomTopic());

    const updateRandomTopic = () => {
        console.log('Before update:', topicSubtitle.value);
        topicSubtitle.value = getRandomTopic();
        console.log('After update:', topicSubtitle.value);
    };

    return { topicSubtitle, updateRandomTopic };
};

// // import { ref } from 'vue';
// import { topics } from '@/constants/topic';

// const getRandomTopic = () => {
//     const randomIndex = Math.floor(Math.random() * topics.length);
//     const randomTopic = topics[randomIndex];
//     return randomTopic;
// };

// export const useTopic = () => {
//     const topicSubtitle = getRandomTopic();
//     return { topicSubtitle };
// };