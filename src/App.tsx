import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AnimalCarousel } from './components/AnimalCarousel';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';

// Sample data for recently rescued animals (20마리)
const rescuedAnimals = Array.from({ length: 20 }, (_, i) => {
  const animals = [
    { name: '초코', breed: '믹스견', location: '서울시 강남구', description: '길에서 발견되어 구조된 사랑스러운 아이입니다. 현재 건강검진 중이에요.' },
    { name: '나비', breed: '코리안 숏헤어', location: '부산시 해운대구', description: '어미 고양이와 함께 구조된 새끼 고양이입니다.' },
    { name: '구름', breed: '푸들 믹스', location: '대구시 중구', description: '유기되어 구조된 활발한 성격의 강아지입니다.' },
    { name: '별이', breed: '골든 리트리버', location: '인천시 연수구', description: '보호자가 사정으로 인해 보호소에 맡겨진 온순한 대형견입니다.' },
    { name: '미미', breed: '러시안 블루', location: '광주시 북구', description: '아파트 베란다에서 발견되어 구조된 새끼 고양이입니다.' }
  ];
  const animal = animals[i % animals.length];
  const images = [
    'https://images.unsplash.com/photo-1536862413209-7f2485243f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjBkb2clMjBzaGVsdGVyfGVufDF8fHx8MTc1Njc5NDMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1669891732707-4beb1437679a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwYWRvcHRpb258ZW58MXx8fHwxNzU2ODc3MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1733328059553-5d1e986f5078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHNoZWx0ZXIlMjBjYXJlfGVufDF8fHx8MTc1Njg3NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1730452961410-bfeca9ae4a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBhZG9wdGlvbnxlbnwxfHx8fDE3NTY4NzcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1609074405294-355851aead3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjByZXNjdWUlMjBjdXRlfGVufDF8fHx8MTc1Njg3NzA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];
  
  return {
    id: (i + 1).toString(),
    name: `${animal.name}${i > 4 ? ` ${Math.floor(i/5) + 1}` : ''}`,
    age: `${Math.floor(Math.random() * 5) + 1}살`,
    breed: animal.breed,
    location: animal.location,
    image: images[i % images.length],
    status: 'rescued' as const,
    date: `2024.01.${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    description: animal.description
  };
});

// Sample data for adoptable animals (20마리)
const adoptableAnimals = Array.from({ length: 20 }, (_, i) => {
  const animals = [
    { name: '햇살', breed: '진돗개 믹스', location: '서울시 마포구', description: '사람을 좋아하고 산책을 즐기는 건강한 강아지입니다.' },
    { name: '달님', breed: '브리티시 숏헤어', location: '경기도 성남시', description: '조용하고 차분한 성격의 예쁜 고양이입니다.' },
    { name: '봄이', breed: '시츄', location: '부산시 사상구', description: '귀엽고 애교 많은 소형견입니다. 아이들과도 잘 지내요.' },
    { name: '코코', breed: '라브라도 리트리버', location: '대전시 유성구', description: '훈련이 잘 되어 있고 성격이 온순한 대형견입니다.' },
    { name: '루루', breed: '먼치킨', location: '울산시 남구', description: '놀기 좋아하는 활발한 성격의 고양이입니다.' },
    { name: '마루', breed: '비글', location: '인천시 남동구', description: '활발하고 친근한 비글입니다. 다른 개들과도 잘 어울려요.' }
  ];
  const animal = animals[i % animals.length];
  const images = [
    'https://images.unsplash.com/photo-1536862413209-7f2485243f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjBkb2clMjBzaGVsdGVyfGVufDF8fHx8MTc1Njc5NDMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1669891732707-4beb1437679a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwYWRvcHRpb258ZW58MXx8fHwxNzU2ODc3MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1733328059553-5d1e986f5078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHNoZWx0ZXIlMjBjYXJlfGVufDF8fHx8MTc1Njg3NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1730452961410-bfeca9ae4a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBhZG9wdGlvbnxlbnwxfHx8fDE3NTY4NzcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1609074405294-355851aead3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXR0ZW4lMjByZXNjdWUlMjBjdXRlfGVufDF8fHx8MTc1Njg3NzA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFnbGUlMjBkb2clMjBhZG9wdGlvbnxlbnwxfHx8fDE3NTY4Nzc2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];
  
  return {
    id: (i + 20).toString(),
    name: `${animal.name}${i > 5 ? ` ${Math.floor(i/6) + 1}` : ''}`,
    age: `${Math.floor(Math.random() * 8) + 1}살`,
    breed: animal.breed,
    location: animal.location,
    image: images[i % images.length],
    status: 'adoptable' as const,
    date: '입양 대기',
    description: animal.description
  };
});

// Sample data for missing animals (20마리)
const missingAnimals = Array.from({ length: 20 }, (_, i) => {
  const animals = [
    { name: '복실이', breed: '스피츠', location: '서울시 강서구', description: '하얀색 털에 갈색 반점이 있는 스피츠입니다. 목줄에 파란색 인식표 착용 중이었습니다.' },
    { name: '까망이', breed: '토종고양이', location: '부산시 사하구', description: '검은색 털에 흰 가슴팟이 있는 고양이입니다. 사람을 무서워하지 않습니다.' },
    { name: '콩이', breed: '말티즈', location: '대구시 달서구', description: '크림색 털의 말티즈입니다. 분홍색 옷을 입고 있었습니다.' },
    { name: '털뭉치', breed: '페르시안', location: '경기도 수원시', description: '긴털의 회색 페르시안 고양이입니다. 눈이 크고 둥글어요.' },
    { name: '바둑이', breed: '잡종견', location: '광주시 북구', description: '흑백 얼룩무늬의 중형견입니다. 꼬리가 말려있고 귀가 서있어요.' }
  ];
  const animal = animals[i % animals.length];
  const images = [
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW5nJTIwZG9nJTIwc3BpdHp8ZW58MXx8fHwxNzU2ODc3Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW5nJTIwYmxhY2slMjBjYXR8ZW58MXx8fHwxNzU2ODc3Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1551717743-49959800b1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWx0ZXNlJTIwZG9nJTIwbWlzc2luZ3xlbnwxfHx8fDE3NTY4Nzc2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwbWlzc2luZ3xlbnwxfHx8fDE3NTY4Nzc2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW5nJTIwZG9nJTIwbWl4fGVufDF8fHx8MTc1Njg3NzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];
  
  return {
    id: (i + 200).toString(),
    name: `${animal.name}${i > 4 ? ` ${Math.floor(i/5) + 1}` : ''}`,
    age: `${Math.floor(Math.random() * 10) + 1}살`,
    breed: animal.breed,
    location: animal.location,
    image: images[i % images.length],
    status: 'missing' as const,
    date: `2024.01.${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    description: animal.description
  };
});

// Sample data for community posts
const communityPosts = [
  {
    id: '1',
    title: '새로운 가족을 만난 골든 리트리버 "행복이" 근황',
    author: '사랑보호소',
    content: '작년에 입양된 행복이가 새 가족과 함께 행복하게 지내고 있다는 소식을 전해드립니다. 매일 산책하며 건강하게 자라고 있어요.',
    image: 'https://images.unsplash.com/photo-1730452961410-bfeca9ae4a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBhZG9wdGlvbnxlbnwxfHx8fDE3NTY4NzcwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: '입양 후기',
    date: '2024.01.25',
    likes: 156,
    comments: 23,
    views: 1024
  },
  {
    id: '2',
    title: '보호소 봉사활동 후기 - 따뜻한 하루',
    author: '김민수',
    content: '오늘 처음으로 보호소 봉사활동에 참여했습니다. 아이들과 함께한 시간이 정말 소중했고, 다음에도 꼭 참여하고 싶어요.',
    image: 'https://images.unsplash.com/photo-1575470888881-2c5829b9adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjB2b2x1bnRlZXIlMjBzaGVsdGVyfGVufDF8fHx8MTc1Njg3NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: '봉사 후기',
    date: '2024.01.24',
    likes: 89,
    comments: 15,
    views: 567
  },
  {
    id: '3',
    title: '구조견 "초코"의 치료 과정 기록',
    author: '동물병원 김수의사',
    content: '길에서 발견된 초코가 건강을 되찾아가는 과정을 기록합니다. 많은 분들의 관심과 후원 덕분에 회복 중이에요.',
    image: 'https://images.unsplash.com/photo-1536862413209-7f2485243f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjBkb2clMjBzaGVsdGVyfGVufDF8fHx8MTc1Njc5NDMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: '보호일지',
    date: '2024.01.23',
    likes: 234,
    comments: 31,
    views: 891
  },
  {
    id: '4',
    title: '보호소 겨울나기 준비 완료!',
    author: '희망보호소',
    content: '추운 겨울을 맞아 보온용품과 사료 후원에 감사드립니다. 덕분에 아이들이 따뜻하게 겨울을 날 수 있을 것 같아요.',
    category: '보호소 타임라인',
    date: '2024.01.22',
    likes: 178,
    comments: 42,
    views: 1156
  },
  {
    id: '5',
    title: '강아지 훈련 방법에 대해 질문있어요',
    author: '이수진',
    content: '새로 입양한 강아지가 밤에 자꾸 울어서 고민입니다. 좋은 훈련 방법이나 조언 있으시면 공유해주세요.',
    category: '질문과 답변',
    date: '2024.01.21',
    likes: 67,
    comments: 28,
    views: 445
  },
  {
    id: '6',
    title: '겨울철 유기동물 구조 활동 현황',
    author: '동물구조대',
    content: '추운 겨울, 길거리에서 힘들어하는 아이들을 구조하고 있습니다. 시민 여러분의 신고와 관심이 큰 도움이 됩니다.',
    category: '보호소 타임라인',
    date: '2024.01.20',
    likes: 312,
    comments: 56,
    views: 1789
  },
  {
    id: '7',
    title: '새로 입양된 고양이 "달빛이" 적응기',
    author: '박지혜',
    content: '한 달 전 입양한 달빛이가 집에 완전히 적응했어요! 처음엔 숨어만 있던 아이가 이제는 무릎 위에서 잠을 자네요.',
    category: '입양 후기',
    date: '2024.01.19',
    likes: 98,
    comments: 19,
    views: 634
  },
  {
    id: '8',
    title: '보호소 운영비 후원 현황 공지',
    author: '희망보호소',
    content: '12월 한 달간 따뜻한 후원을 해주신 모든 분들께 감사드립니다. 덕분에 겨울철 난방비와 사료비를 충당할 수 있었습니다.',
    category: '보호소 타임라인',
    date: '2024.01.18',
    likes: 203,
    comments: 38,
    views: 987
  },
  {
    id: '9',
    title: '우리 집 새 식구 "복이" 이야기',
    author: '최민정',
    content: '3개월 전 입양한 복이가 우리 가족에게 가져다준 행복은 말로 표현할 수 없어요. 입양을 고민하시는 분들께 추천드려요!',
    category: '입양 후기',
    date: '2024.01.17',
    likes: 145,
    comments: 27,
    views: 756
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnimalCarousel
        title="최근 구조된 아이들"
        subtitle="길에서 구조되어 보호받고 있는 아이들입니다"
        animals={rescuedAnimals}
      />
      <AnimalCarousel
        title="입양을 기다리는 아이들"
        subtitle="따뜻한 가족을 기다리고 있어요"
        animals={adoptableAnimals}
      />
      <AnimalCarousel
        title="실종된 아이들"
        subtitle="가족을 찾고 있어요. 목격하신 분은 제보해주세요"
        animals={missingAnimals}
      />
      <CommunitySection posts={communityPosts} />
      <Footer />
    </div>
  );
}