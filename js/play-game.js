/* =========================================================
   ER STUDIO - PLAY GAME
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector(
        ".play-game-video video"
    );

    const videoContainer = document.querySelector(
        ".play-game-video"
    );

    const placeholder = document.querySelector(
        ".play-game-video-placeholder"
    );


    /* =====================================================
       VIDEO
       ===================================================== */

    if (
        video &&
        videoContainer &&
        placeholder
    ) {

        /*
         * Hide the placeholder once an actual
         * video source successfully starts playing.
         */
        video.addEventListener("playing", () => {

            videoContainer.classList.add(
                "has-video"
            );

        });


        /*
         * If the video fails to load,
         * keep the placeholder visible.
         */
        video.addEventListener("error", () => {

            videoContainer.classList.remove(
                "has-video"
            );

        });


        /*
         * A source is currently empty, so don't
         * attempt to hide the placeholder.
         */
        if (
            video.querySelector("source") &&
            video.querySelector("source").src
        ) {

            video.load();

        }
    }


    /* =====================================================
       DEMO BUTTONS
       ===================================================== */

    document
        .querySelectorAll(".play-game-demo-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const game =
                    button.dataset.game;

                console.log(
                    `Play demo requested: ${game}`
                );

                /*
                 * Unity WebGL loading will be added
                 * in the next step.
                 */
            });

        });

});