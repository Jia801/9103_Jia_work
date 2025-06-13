# 9103_Jia_work
## 1. Interactive description of the work
#### This work controls the radius of the circle and the proportion of red and green by the volume and frequency of the audio. The visual effect is that when the volume is high, the circle will become larger, and the proportion of red and green inside will also change. It also includes pause and play buttons, which can be clicked to control the playback of the entire animation. In addition, the slider below can be used to control the volume of the overall playback of the song.



## 2. Details of personal methods.
#### For this project, I used audio to expand our group work "Apple Tree".
#### In terms of song selection, I first studied the background of "Apple Tree" in depth. The author of "Apple Tree", Shemza, was deeply inspired by Islamic geometric patterns. His apple tree is not realistic, but is expressed with repeated circles (apples), lines (branches) and grid structures, echoing the order and rhythm in Islamic art. My initial idea was to use a song with Islamic style that could be closely connected with this artwork. In the end, I found Hamza El Din's "Escalay", which has the winding melody of traditional Islamic music and is also rhythmic, suitable for expressing the geometric repetition in the painting. The whole song is nearly 13 minutes long, so I captured more than 40 seconds of it and added it to my work.
Audio link: https://youtu.be/glC37ei6zA0?si=mTXGOXt1KQXnxgSH


#### For the expression of animation, I referred to this Gif image. I planned to express the "apples" on the apple tree in this way, which can also reflect the rhythm of the music.
!(/Users/jia/Documents/GitHub/9103_Jia_work/gif)
Gif Link: https://dribbble.com/shots/4897456-Music-Visualizer

#### For the entire code, I basically added content based on the group code. Only the page refresh detectRefresh() was deleted, and the button "play" was used to define the restart of work.

## The following are some code references:
### userStartAudio()
#### Function: Solve the browser's automatic playback policy restrictions, and the audio must be started after user interaction
#### Reason: When I used the browser test, I found that the browser prohibits automatic audio playback by default, so I changed it to play after clicking the button, and also ensured that the audio context was activated after the user's first interaction to avoid playback failure.
https://p5js.org/reference/p5/userStartAudio/

### getAudioContext()
#### Function: Restore the audio context that was automatically paused by the browser.
#### Reason: It takes time to load the audio file, so avoid directly playing the audio that has not been loaded to prevent errors.
https://p5js.org/reference/p5/getAudioContext/

### onended()
#### Purpose: Listen for the natural end event of the audio.
#### Reason: I want to reset the animation when the song ends.
https://p5js.org/reference/p5.SoundFile/onended/

### createSlider()
#### Purpose: Create a UI slider to control the volume.
#### Reason: I hope to improve the user interaction experience.
https://p5js.org/reference/p5/createSlider/

### setVolume()
#### Purpose: Set the playback volume of the audio file in real time.
#### Reason: After using this, the user can adjust the volume through the slider.
https://p5js.org/reference/p5.SoundFile/setVolume/

### getLevel()
#### Purpose: Get the instantaneous amplitude of the current audio.
#### Reason: This code can more quickly and dynamically get the instantaneous volume of the audio, and then run the animation.
https://p5js.org/reference/p5.Amplitude/getLevel/