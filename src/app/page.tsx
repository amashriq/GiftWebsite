import HomeButton from '@/components/HomeButton';
import GameIcon from '@/components/icons/GameIcon';
import MemoriesIcon from '@/components/icons/MemoriesIcon';
import LetterIcon from '@/components/icons/LetterIcon';

export default function Home() {
  return (
    <main className = {`
      flex
      min-h-screen
      flex-col
      items-center
      justify-center`}>
      <div className = {`
        flex
        flex-wrap
        justify-center
        gap-4
        w-1/2
        `}>
          <HomeButton
            href="/picks"
            icon={<GameIcon className="w-20 h-20" stroke="#D8A39D" strokeWidth=".1"/>}
            aria-label="Game"
          />
          <HomeButton
            href="/memories"
            icon={<MemoriesIcon className="w-20 h-20" stroke="#D8A39D" strokeWidth=".1"/>}
            aria-label="Memories"
          />
          <HomeButton
            href="/letter"
            icon={<LetterIcon className="w-20 h-20" stroke="#D8A39D" strokeWidth="1.5"/>}
            aria-label="letter"
          />
      </div>
    </main>
  );
}
