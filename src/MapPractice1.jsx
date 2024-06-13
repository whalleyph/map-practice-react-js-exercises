import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);
    const emojiElements = emojisArray.map(emoji => <div className="emoji">{emoji}</div>)

    return (
        <div className="mapPractice">
            <h2>Emojis:</h2>
            <div className="emojiList">
                {emojiElements}
            </div>
        </div>
    );
}
