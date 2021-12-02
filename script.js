const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// promt to select media stream, pass video element, then play
async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // catch errors
    console.log('whoops', error)
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true
  //   start picture in picture
  await videoElement.requestPictureInPicture()
  // reset button
  button.disabled = false
})

//  onload
selectMediaStream()
