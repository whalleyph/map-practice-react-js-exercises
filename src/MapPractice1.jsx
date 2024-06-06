import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();

    const divsArray = emojisArray.map((e) => (
        <div key={e} className="emoji">
            {e}
        </div>
    ));

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList">{divsArray}</div>
        </div>
    );
}
