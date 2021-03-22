// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-letter="${e.key.toUpperCase()}"]`);
//     const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add("piano-key-active");

//     function offLight() {
//         key.classList.remove("piano-key-active");
//     }

//     const timerId = setTimeout(offLight, 200);
// });

function playSoundKeybord (e){
        const audio = document.querySelector(`audio[data-letter="${e.key.toUpperCase()}"]`);
        const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("piano-key-active");
    
        function offLight() {
            key.classList.remove("piano-key-active");
        }
    
        const timerId = setTimeout(offLight, 200);
    }
    
window.addEventListener('keydown', playSoundKeybord);


window.addEventListener('click', function (e) {
    
});



// const piano = document.querySelector('.piano');

// piano.addEventListener('click', function (e) {
//    const target = e.target.querySelector(`.piano-key`);
//     const dataKey = target.getAttribute(('data-note'));
//    const src = `assets/audio/virtual-piano_assets_audio_${dataKey}.mp3`;
// console.log(target);
//    function playAudio(src) {
//     const audio = new Audio();
//     audio.src = src;
//     audio.currentTime = 0;
//     audio.play();
//     target.classList.add("piano-key-active");
    
//         function offLight() {
//             target.classList.remove("piano-key-active");
//         }
    
//         const timerId = setTimeout(offLight, 200);
//   }
// });
  
// //     function keyPlay(dataKey){
// //         audio.currentTime = 0;
// //         audio.play();
// //         key.classList.add("piano-key-active");
    
// //         function offLight() {
// //             key.classList.remove("piano-key-active");
// //         }
    
// //         const timerId = setTimeout(offLight, 200);

// // }
// // console.log(key);
// // console.log(dataKey);
// // if (target===key){
// //     if (!audio) return;
// //     audio.currentTime = 0;
// //     audio.play();
// //     key.classList.add("piano-key-active");

// //     function offLight() {
// //         key.classList.remove("piano-key-active");
// //     }

// // //     const timerId = setTimeout(offLight, 200);
// // }    
// // });





// // const piano = document.querySelector('.piano');

// window.addEventListener('click', function (e) {
// const audio = document.querySelector(`audio[data-letter="${e.key}"]`);
// const key = document.querySelector(`.piano-key[data-letter="${e.key}"]`),

//     startSound = (event) => {
//         event.target.classList.add("piano-key-active");
//     },

//     stopSound = (event) => {
//         event.target.classList.remove("piano-key-active");
//     };
// const startCorrespondOver = (event) => {
    
//     if (event.target.classList.contains("piano-key")) {
//         event.target.classList.remove("piano-key-active");
//     }
//     const pianoKeys = document.querySelector('.piano-key');
//     pianoKeys.forEach((elem) => {
//         const pianoKeys = document.querySelector('.piano-key');
//         elem.addEventListener("mouseover", startSound);
//         elem.addEventListener("mouseout", stopSound);
//     });
// };
// const stopCorrespondOver = (event) => {
//     const pianoKeys = document.querySelector('.piano-key');
//     pianoKeys.forEach((elem) => {
        
//         elem.classList.remove("piano-key-active");
//         elem.addEventListener("mouseover", startSound);
//         elem.addEventListener("mouseout", stopSound);
//     });
// };
// piano.addEventListener("mousedown", startCorrespondOver, false);
// piano.addEventListener("mouseup", stopCorrespondOver);
// piano.addEventListener('click', (event) => {
//     if(event.target.classList.contains('piano-key')) {
//       const note = event.target.dataset.note;
//       const src = `assets/audio/${note}.mp3`;
//       audio.play(src);
//     }   
//   });
// });