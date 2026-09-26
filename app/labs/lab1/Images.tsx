export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading an image from the internet: cat meme
      <br />
      <img
        id="wd-your-image"
        width="400px"
        alt="cute cat"
        src="https://m.media-amazon.com/images/I/61qG1CcepAL.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading a local image: robot dog
      <br />
      <img
        id="wd-your-image"
        src="/images/robot_dog.jpg"
        height="200px"
        alt="Robot Dog"
      />
      <br />
      Loading a local image: penguins
      <br />
      <img
        id="wd-ai-image"
        src="/images/penguins.jpg"
        alt="penguins"
        width={200}
      />
    </div>

  );
}