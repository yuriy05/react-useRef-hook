import {useRef} from "react";
import Page from "./component/page";
import Grid from "./component/grid";

function App() {

  const firstPicture = useRef(null);
  const secondPicture = useRef(null);
  const thirdPicture = useRef(null);

  function handleScrollBy(ref) {
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollBy({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  return(
    <Page>
      <Grid>
        <button onClick={() => handleScrollBy(firstPicture)}>First image</button>
        <button onClick={() => handleScrollBy(secondPicture)}>Second image</button>
        <button onClick={() => handleScrollBy(thirdPicture)}>Third image</button>
      </Grid>
      <div>
        <ul style={{ display: "grid", gap: "500px", marginBottom: "500px"}}>
          <li>
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              ref={firstPicture}
            />
          </li>
          <li>
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              ref={secondPicture}
            />
          </li>
          <li>
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              ref={thirdPicture}
            />
          </li>
        </ul>
      </div>
    </Page>
  )
}

export default App;
