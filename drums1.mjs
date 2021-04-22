import { Tone } from "https://taisukef.github.io/Tone.js/Tone.mjs";

const makeKick = () => {
    const opt = {
        pitchDecay: 0.001,
        envelope: {
            attack: 0.001,
            decay: 1.5,
            sustain: 0.01,
            release: 0.01 
        },
        volume: 25
    };
    const tone = new Tone.MembraneSynth(opt).toDestination();
    tone.play = () => tone.triggerAttackRelease('C0', '2n');
    tone.volume.value = -6;
    return tone;
};
const makeSnare = () => {
    const opt = {
        envelope: {
            attack: 0.001,
            decay: 0.7,
            sustain: 0
        }
    };
    const tone = new Tone.NoiseSynth(opt).toDestination();
    tone.play = () => tone.triggerAttackRelease('8n');
    tone.volume.value = -6;
    return tone;

};
const makeHihat = () => {
    const opt = {
        type: "brown",
        envelope: {
            attack: 0.001,
            decay: 0.03,
            sustain: 0
        }
    };
    const tone = new Tone.NoiseSynth(opt).toDestination();
    tone.play = () => tone.triggerAttackRelease('32n');
    tone.volume.value = -6;
    return tone;
};

const toneKick = makeKick();
const toneSnare = makeSnare();
const toneHihat = makeHihat();

export { toneKick, toneSnare, toneHihat };
